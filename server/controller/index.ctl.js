
class AppController 
{
    getHomePage(req, res) {
        res.send('This is the homepage!')
    }

    getLoginPage(req, res) {
        res.send('This is the login page!')
    }
}

module.exports = new AppController