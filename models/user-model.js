const { Schema, model, SchemaType } = require('mongoose');

const UserSchema = new Schema({
    tgId: {type: Number},
    userName: {type: String},
    count: {type: Number},
})

module.exports = model('User', UserSchema);