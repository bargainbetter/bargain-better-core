var viewController = require('./controllers/viewController');
var Linkedin = require('node-linkedin')('78m6kmzfd6yoqf', 'lqfcxRk3d4Jpz3dN');
var scope = ['r_basicprofile',
             'r_emailaddress'];

module.exports = function (app) {

    app.get('/:token', viewController.index);

    app.get('/oauth/linkedin', function(req, res) {
        Linkedin.auth.setCallback('http://localhost:9002/oauth/linkedin/callback');
        Linkedin.auth.authorize(res, scope);
    });

    app.get('/oauth/linkedin/callback', function(req, res) {
        Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, results) {
            if (err) {
                return console.error(err);
            }

            /**
             * results:
             * { access_token: 'AQW0vg0wCTWD4w_6beEQY0OHpuxv_f5TOWDpvkxhfCgm-4Bb1HeBIw3Vy4NY-2fB0LB01Tdzo1f3qUDqBSQbLdI6vM8bQko6dLqbmtlcZQkVLc1hATaSl_lg2azqRpVqw-6LTZ_RDG8b-rxX7DoNw_RybYQZOOrhemTp_EtIVA2KOzf48lk',
             *  expires_in: 5183999 }
             */

            console.log(results);
            return res.redirect(`/${results.access_token}`);
        });
    });
};

