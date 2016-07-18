var viewController = require('./controllers/viewController');
var authController = require('./controllers/authController');

module.exports = function (app) {
    app.get('/', function(req, res) {
        res.redirect('/oauth/linkedin');
    });

    app.get('/:token', viewController.index);  //do something with token
    app.get('/oauth/linkedin', authController.authorize);
    app.get('/oauth/linkedin/callback', authController.authorizationCallback);
};

