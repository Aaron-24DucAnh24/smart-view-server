
* To install all packages: > npm install

* To start server:         > npm run server

* Open route folder to see detailed API path

* Database:

    users {
        _id: string,
        fname: string,
        lname: string,
        role: string,
        loginName: string,
        passWord: string,
        avatar: string     // need to converted img into base64
    }

    post {
        _id: string,
        title: string,
        authorID: string,
        view: int32 default: 0,
        like: int32 default: 0,
        img: [string],
        content: string,
        queued: boolean default: true,
        reportedNo: int32,     // consider as reported if value >= 10
    }

    preview = project({title, authorInfo, view, like, firstImg}, post)

* API: all request data and response data are JSON

1.  login  [post] http:/localhost:3000/users/login
        req {
                loginName: string, 
                password: string
        }  
        res {_id, fname, lname, avatar, role} || null           

2.  logout [get]  http:/localhost:3000/users/logout
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
