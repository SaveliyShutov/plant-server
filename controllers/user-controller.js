const UserService = require('../service/user-service.js')


module.exports = {
    async login(req, res, next) {
        try {
            const userData = await UserService.login(req.body)
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    },  
    async openBox(req, res, next) {
        try {
            const userData = await UserService.openBox(req.body)
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    },
    async count(req, res, next) {
        try {
            const countData = await UserService.count(req.body)
            return res.json(countData)
        } catch (error) {
            next(error)
        }
    },
}