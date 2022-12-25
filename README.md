* Link to access db on Compass: mongodb+srv://aaron:smartviewapp@cluster0.3c3cero.mongodb.net/test

* To install all packages: > npm install

* To start server:         > npm run server

* Open route folder to see detailed API path

* API: 
- All request data and response data are in JSON format
- All the response messages below are under the normal conditions, if there were problems with database, connection, bandwidth,... response messages would be {err: error}

        1.  login  [post] http://localhost:3000/users/login
                req { loginName: string, password: string}  
                res {_id, fname, lname, avatar, role} || null           

        2.  logout [get]  http://localhost:3000/users/logout  
                (require logging)
                res true

        3.  signIn [post] http://localhost:3000/users/signIn
                req {
                        fname: string,
                        lname: string,
                        loginName: string, 
                        password: string,
                        avatar: string      (set to be "" if no img uploaded)
                }  
                res 1 || 0

        4. preview [get] http://localhost:3000/posts/preview
                res [{
                        _id: string
                        title: string
                        view: int32
                        like: int32
                        img: string (base64)
                        liked: boolean (if the current user liked the post or not)
                        authorDetail: {
                                fname: string
                                lname: string
                                img: string (base64)
                        }
                }]

        5. getPost [get] http://localhost:3000/posts/:postID
                res [{
                        _id: string
                        title: string
                        view: int32
                        like: int32
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
        
        6. (admin) preview [get] http://localhost:3000/admin/preview
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

        7. (admin) getPost [get] http://localhost:3000/admin/:postID
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

        8. (admin) deletePost [delete] http://localhost:3000/admin/:postID
                res 1

        9. (admin) approvePost [get] http://localhost:3000/admin/approve?postID=...
                res 1

                (Hiện tại đang ẩn các dòng delete và approve record đi,
                khi nào có tính năng thêm bài viết thì mới xoá thật,
                do nguồn tài nguyên có hạn :))))

