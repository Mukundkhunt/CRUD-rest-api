const UserModel = require('../model/user.model')
const httpStatus = require('http-status')
module.exports = (req, res) => {
    if (!req.query.email) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Missing email is required")
    } else {
        UserModel.findOneAndUpdate({ email: req.query.email }, req.body, { new: true })
            .then(result => res.json(result)).catch(err => console.log(err))
    }
}