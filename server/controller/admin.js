
const connect = require('../model/config')
const mongodb = require('mongodb')

class AdminController {
    preview(req, res) {
        connect('post', preview, req)
        .then(data => res.json(data))
        .catch(err => res.json({err: err}))
    }

    getPost(req, res) {
        connect('post', getPost, req, 'users')
        .then(data => res.json(data))
        .catch(err => res.json({err: err}))
    }

    deletePost(req, res) {
        connect('post', deletePost, req)
        .then(data => res.json(data))
        .catch(err => res.json({err: err}))
    }

    approvePost(req, res) {
        connect('post', approvePost, req)
        .then(data => res.json(data))
        .catch(err => res.json({err: err}))
    }
}

module.exports = new AdminController()

async function preview(col1) {
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

    var result = []
    for(var post of posts) {
        if(post.queued || post.reported){

            if(post.queued) post.type = 0
            else post.type = 1

            delete post.img
            delete post.like
            delete post.view
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

            result.push(post)
        }
    }

    return result
}

async function getPost(col1, req, col2) {
    var postID = new mongodb.ObjectId(req.params.postID)
    var postDetail = await col1.findOne({_id: postID})

    var authorDetail = await col2.findOne(
        {_id: postDetail.authorID},
        {projection: {_id: 0, loginName: 0, password: 0, role: 0}}
    )
    
    delete postDetail.authorID
    delete postDetail.queued
    delete postDetail.reported
    postDetail.authorDetail = authorDetail

    return postDetail
}

async function deletePost(col1, req) {
    var postID = new mongodb.ObjectId(req.params.postID)
    // await col1.deleteOne({_id: postID})
    return 1
}

async function approvePost(col1, req) {
    var postID = new mongodb.ObjectId(req.query.postID)
    // await col1.updateOne(
    //     {_id: postID}, 
    //     {$set: {reported: false, queued: false, reportedNo: 0}}
    // )
    return 1
}
