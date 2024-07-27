const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    tgId: {type: Number},
    userName: {type: String},
    count: {type: Number},
    isWaiting: {type: Boolean},
    timerLimit: {type: Number},
    remainingTime: {type: Number},
    lastSignTime: {type: Number}

})

module.exports = model('User', UserSchema);