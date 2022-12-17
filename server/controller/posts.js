
const connect = require('../model/config')
const mongodb = require('mongodb')

class PostsController {
    preview(req, res)  {
        connect('post', preview, req, 'likes')
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

    var obId = new mongodb.ObjectId(req.session.user._id)
    var likes = await col2.findOne({
        userID: obId
    })

    for(var post of posts) {
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
        if(likes) if(post._id.equals(likes.postID)) post.liked = true
    }

    return posts
}
