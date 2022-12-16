
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

* API:

    login  [post] http:/localhost:3000/users/login
        - req {loginName: string, password: string}
        - res 'admin' || 'member' || ''

    logout [get]  http:/localhost:3000/users/logout
        - res true

    signIn [post] http:/localhost:3000/users/signIn
        - req {loginName: string, password: string}
        - res true || false
