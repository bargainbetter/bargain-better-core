
module.exports.index = function (req, res) {
    var linkedin = Linkedin.init(req.params.token);
    linkedin.people.me(function(err, $in) {
       console.log($in);
    });

    res.render('index', $in);
}