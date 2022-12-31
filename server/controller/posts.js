
const connect = require('../model/config')
const mongodb = require('mongodb')

class PostsController {

    preview(req, res)  {
        connect('post', preview, req, 'likes')
        .then(data => res.json(data))
        .catch(err => res.json({err: err}))
    }

    getPost(req, res) {
        connect('post', getPost, req, 'users', 'likes', 'reports')
        .then(data => res.json(data))
        .catch(err => res.json({err: err}))
    }

    // Bảo
    putPost(req, res) {
        res.json('putPost API')
    }

    // Bảo
    postPost(req, res) {
        res.json('postPost API')
    }

    // Bảo
    deletePost(req, res) {
        res.json('deletePost API')
    }

    likePost(req, res) {
        connect('post', likePost, req, 'likes')
        .then(data => res.json(data))
        .catch(err => res.json({err: err}))
    }

    reportPost(req, res) {
        connect('post', reportPost, req, 'reports')
        .then(data => res.json(data))
        .catch(err => res.json({err: err}))
    }
}

module.exports = new PostsController()

async function preview(col1, req, col2) {
    var posts = await col1.aggregate([
            {$lookup:
                {
                    from: 'users',
                    localField: 'authorID',
                    foreignField: '_id',
                    as: 'authorDetail'
                }
            }
        ]).toArray()

    var likes = null
    if(req.session.user){
        var obId = new mongodb.ObjectId(req.session.user._id)
        likes = await col2.find({userID: obId}).toArray()
    }

    var result = []
    for(var post of posts) {
        if(!post.queued && !post.reported){
            post.img = post.img[0]
            post.liked = false
            delete post.content
            delete post.queued
            delete post.reportedNo
            delete post.reported
            delete post.authorID
            post.authorDetail = post.authorDetail[0]
            delete post.authorDetail._id
            delete post.authorDetail.role
            delete post.authorDetail.password
            delete post.authorDetail.loginName
            if(likes)
                for(var like of likes)
                    if(post._id.equals(like.postID)) 
                        post.liked = true
    
            result.push(post)
        }
    }

    return result
}

async function getPost(col1, req, col2, col3, col4) {
    var postID = new mongodb.ObjectId(req.params.postID)
    await col1.updateOne(
        {_id: postID},
        {$inc: {view: 1}}
    )
    var postDetail = await col1.findOne(
        {_id: postID},
        {projection: {queued: 0, reported: 0, reportedNo: 0}}
    )

    var authorDetail = await col2.findOne(
        {_id: postDetail.authorID},
        {projection: {_id: 0, loginName: 0, password: 0, role: 0}}
    )
    
    delete postDetail.authorID
    postDetail.authorDetail = authorDetail

    var likes = null
    var reports = null
    if(req.session.user){
        var userID = new mongodb.ObjectId(req.session.user._id)
        likes   = await col3.findOne({userID: userID, postID: postID})
        reports = await col4.findOne({userID: userID, postID: postID})
    }

    if(likes) postDetail.liked = true
    else postDetail.liked = false

    if(reports) postDetail.reported = true
    else postDetail.reported = false

    return postDetail
}

async function likePost(col1, req, col2) {
    var postID = new mongodb.ObjectId(req.query.postID)
    var userID = new mongodb.ObjectId(req.session.user._id)
    var likes = await col2.findOne({userID: userID, postID: postID})

    if(likes) {
        await col2.deleteOne({userID: userID, postID: postID})
        await col1.updateOne(
            {_id: postID},
            {$inc: {like: -1}}
        )
    }

    else {
        await col2.insertOne({userID: userID, postID: postID})
        await col1.updateOne(            
            {_id: postID},
            {$inc: {like: 1}}
        )
    }

    return 1
}

async function reportPost(col1, req, col2) {
    var postID = new mongodb.ObjectId(req.query.postID)
    var userID = new mongodb.ObjectId(req.session.user._id)
    var reports = await col2.findOne({userID: userID, postID: postID})

    if(reports) {
        await col2.deleteOne({userID: userID, postID: postID})
        await col1.updateOne(
            {_id: postID},
            {$inc: {reportedNo: -1}}
        )
    }

    else {
        await col2.insertOne({userID: userID, postID: postID})
        await col1.updateOne(            
            {_id: postID},
            {$inc: {reportedNo: 1}}
        )
    }

    return 1
}
