
const appController = require('../controller/index.ctl')
const checker       = require('../middleware/authen')

function route(app) 
{
    app.get('/login', appController.getLoginPage)
    app.get('/', checker, appController.getHomePage)
} 

module.exports = route