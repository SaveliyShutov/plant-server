const UserModel = require('../models/user-model')

module.exports = {
    async login(body) {
        const candidate = await UserModel.findOne({ 'tgId': body.tgId })
        if (candidate) {
            return candidate
        }
        const user = await UserModel.create({ tgId: body.tgId, userName: body.username, level: 1, click: 1, count: 0, waterLevel: 1, currentWater: 1000 })
        return {
            user
        }
    },
    async count(body) {
        let { _id, count } = body
        const candidate = await UserModel.findOneAndUpdate({ '_id': _id }, { 'count': count }).select({ count: 1 })
        if (candidate) {
            return candidate
        }
    },
}