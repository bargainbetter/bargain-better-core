var linkedInService = require('../services/linkedInService');

module.exports.index = function (req, res) {
    linkedInService.getProfile(req.query.access_token)
        .then((result) => {
            console.log(result);
            res.json(result)
        });
};