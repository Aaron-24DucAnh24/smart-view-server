* Link to access db on Compass app: mongodb+srv://aaron:smartviewapp@cluster0.3c3cero.mongodb.net/test
* Link to access db on Node app: mongodb+srv://aaron:smartviewapp@cluster0.3c3cero.mongodb.net/?retryWrites=true&w=majority

* To install all packages: > npm install

* To start server:         > npm run server

* Open route folder to see detailed API path

* API: 
- All request data and response data are in JSON format
- All the response messages below are under the normal conditions, if there were problems with database, connection, bandwidth,... response messages would be {err: error}

        -  login  [post] http://localhost:3000/users/login
                req { loginName: string, password: string}  
                res {_id, fname, lname, avatar, role} || null           

        -  logout [get]  http://localhost:3000/users/logout  
                (require logging)
                res true

        -  signIn [post] http://localhost:3000/users/signIn
                req {
                        fname: string,
                        lname: string,
                        loginName: string, 
                        password: string,
                        avatar: string      (set to be "" if no img uploaded)
                }  
                res 1 || 0

        - preview [get] http://localhost:3000/posts/preview
                res [{
                        _id: string
                        title: string
                        view: int32
                        like: int32
                        tag: [string]
                        img: string (base64)
                        liked: boolean (if the current user liked the post or not)
                        authorDetail: {
                                fname: string
                                lname: string
                                img: string (base64)
                        }
                }]

        - getPost [get] http://localhost:3000/posts/:postID
                res [{
                        _id: string
                        title: string
                        view: int32
                        like: int32
                        tag: [string]
                        content: string
                        img: [string (base64)]
                        liked:    boolean (if the current user liked the post or not)
                        reported: boolean (if the current user reported the post or not)
                        authorDetail: {
                                fname: string
                                lname: string
                                img: string (base64)
                        }
                }]

        - reportPost [get] http://localhost:3000/posts/report?postID=...
                (require logging)
                res 1

        - likePost [get] http://localhost:3000/posts/like?postID=...
                (require logging)
                res 1

        - (admin) preview [get] http://localhost:3000/admin/preview
                res [{
                        _id: string
                        title: string
                        authorDetail: {
                                fname: string
                                lname: string
                                img: string (base64)
                        }
                        type: 0(queued posts) || 0(reported posts)
                }]

        - (admin) getPost [get] http://localhost:3000/admin/:postID
                res [{
                        _id: string
                        title: string
                        view: int32
                        like: int32
                        reportedNo: int32
                        content: string
                        img: [string (base64)]
                        authorDetail: {
                                fname: string
                                lname: string
                                img: string (base64)
                        }
                }]

        - (admin) deletePost [delete] http://localhost:3000/admin/:postID
                res 1

        - (admin) approvePost [get] http://localhost:3000/admin/approve?postID=...
                res 1

        - myPost [get] http://localhost:3000/posts/myPost
                (require logging)
                res [{
                        _id: string
                        title: string
                        view: int32
                        like: int32
                        tag: [string]
                        img: string (base64)
                        liked: boolean (if the current user liked the post or not)
                        authorDetail: {
                                fname: string
                                lname: string
                                img: string (base64)
                        }
                }]

        - postPost [post] http://localhost:3000/posts/post
                (require logging)
                req {
                        title: string
                        content: string
                        img: [string]
                        tag: [string]
                }

                res 1 || 0

        - deletePost [delete] http://localhost:3000/posts/:postID
                (require logging)
                res 1 || 0

        - updatePost [put] http://localhost:3000/posts/:postID
                (require logging)
                req {
                        title: string
                        content: string
                        img: [string]
                        tag: [string]
                }

                res 1 || 0
                