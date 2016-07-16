var Linkedin = require('node-linkedin')('78m6kmzfd6yoqf', 'lqfcxRk3d4Jpz3dN');

module.exports.index = function (req, res) {
    var linkedin = Linkedin.init(req.params.token);
    linkedin.people.me(function(err, $in) {
       console.log($in);
    });

    res.render('index', {"title":"nodejs starter"});
}