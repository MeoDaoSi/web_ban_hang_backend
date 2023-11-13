const mongoose = requrie('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    full_name: {
        type: String,
        require: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    address: {
        type: String,
        require: true,
        trim: true,
    },
    password: {
        type: Number,
        require: true,
        trim: true,
    },
    phone: {
        type: Number,
        require: true
    }
})

const User = mongoose.model('users', userSchema);

module.exports = User
