const { Schema, model, SchemaType } = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
})

module.exports = model('User', UserSchema);