const UserModel = require('../models/user-model')

module.exports = {
    async login(body) {
        const candidate = await UserModel.findOne({ 'tgId': body.tgId })
        if (candidate) {
            return candidate
        }
        const user = await UserModel.create({
            tgId: body.tgId,
            userName: body.username,
            count: 0,
            isWaiting: false,
            timerLimit: 86400,
            remainingTime: 86400,
            lastSignTime: new Date().getTime()
        })
        return {
            user
        }
    },
    async openBox(body) {
        let _id = body
        const candidate = await UserModel.findOneAndUpdate({ '_id': _id }, { 'isWaiting': true, 'lastSignTime': new Date().getTime() })
        return candidate
    },
    async count(body) {
        let { _id, count } = body
        const candidate = await UserModel.findOneAndUpdate({ '_id': _id }, { 'count': count }).select({ count: 1 })
        if (candidate) {
            return candidate
        }
    },
}