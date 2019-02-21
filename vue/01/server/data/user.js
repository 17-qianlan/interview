const { Schema } = require('./schema');

const userSchema = new Schema({
    username: String,
    password: String,
    token: String,
    time: Number
}, {
    versionKey: false
});

module.exports = userSchema;
