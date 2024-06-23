const UserService = require('../service/user-service.js')


module.exports = {
    async login(req, res, next) {
        try {
            const userData = await UserService.login(req.body)

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, secure: true });
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    },

}