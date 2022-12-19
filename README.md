
* To install all packages: > npm install

* To start server:         > npm run server

* Open route folder to see detailed API path

* API: all request data and response data are JSON

        1.  login  [post] http:/localhost:3000/users/login
                req { loginName: string, password: string}  
                res {_id, fname, lname, avatar, role} || null           

        2.  logout [get]  http:/localhost:3000/users/logout  
                (require logging)
                res true

        3.  signIn [post] http:/localhost:3000/users/signIn
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

        5. detailed [get] http://localhost:3000/posts/:postID
                res [{
                        _id: string
                        title: string
                        view: int32
                        like: int32
                        content: string
                        img: string (base64)
                        liked:    boolean (if the current user liked the post or not)
                        reported: boolean (if the current user reported the post or not)
                        authorDetail: {
                                fname: string
                                lname: string
                                img: string (base64)
                        }
                }]
