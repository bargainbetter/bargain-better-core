var Guid = require('guid');

module.exports.getProfile = function getProfile(access_token)
{
    return new Promise(function (resolve, reject) {
        var linkedin = Linkedin.init(access_token);
        linkedin.people.me(function(err, res) {
            if (err) {
                console.log(err);
                return reject(err);
            }

            // do other profile stuff here
            addAssociations(res);
            addInterests(res);
            addPreviousEmploymentHistory(res);

            return resolve(res)
        });
    })
}

function addAssociations(obj) {
    obj.associations = ['Carlson School of Business', 'Minneapolis Code Camp', 'Real UI'];
}

function addInterests(obj) {
    obj.interests = ['golf', 'downhill skiing'];
}

function addPreviousEmploymentHistory(obj) {
    obj.pastPositions = [
        {
            id: Guid.raw(),
            title: 'Sr. Manager, IT at Best Buy',
            summary: "Oversaw the implementation of strategic business capabilities including reverse logistics and customer claims management.  Collaborated with governance teams in order to push adoption of emerging technologies including Elasticsearch, Docker, and Node.js within core enterprise systems and processes.\n\nDesigned and developed highly scalable architectures based on containerization of services and defined organizational structure around developer support operations.   \n\nManaged vendor relationships, project delivery, and DevOps support across Best Buy's services and reverse logistics workforces.  ",
            start: '1/2/2011',
            end: '1/3/2006',
            isCurrent: false,
            company: {
                id: 2127,
                name: 'Best Buy',
                type: 'Public Company',
                size: '10001+',
                industry: 27,
                ticker: 'BBY'
            }
        },
        {
            id: Guid.raw(),
            title: 'Manager, IT Consulting',
            summary: 'Consulting Organization',
            start: '1/2/209',
            end: '1/3/2005',
            isCurrent: false,
            company: {
                id: Guid.raw(),
                name: 'Accenture',
                type: 'Public Company',
                industry: 11,
                ticker: 'ACN'
            }
        }]
};