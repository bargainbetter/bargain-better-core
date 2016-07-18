var linkedInService = require('../services/linkedInService');

module.exports.index = function (req, res) {
    linkedInService.getProfile(req.query.t)
        .then((result) => {
            console.log(result);
            res.json(result)
        });
};