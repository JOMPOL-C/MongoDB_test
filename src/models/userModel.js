const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    avatarUrl: { type: String, required: true },
    cloudinaryId: { type: String, required: true },
},
{
    timestamps: true
});

const users = mongoose.model('User', userSchema);
module.exports = users;