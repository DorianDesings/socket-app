const mongoose = require('mongoose');
const UserScheme = require('../schemes/user.scheme');

const UserModel = mongoose.model('User', UserScheme);

module.exports = UserModel;
