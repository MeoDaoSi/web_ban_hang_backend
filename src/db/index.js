const mongoose = require('mongoose');
const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/web_ban_hang')
        console.log('Connect DB successfully!');
    } catch (error) {
        console.log('Connect DB failed!');
    }
}
module.exports = { connect }