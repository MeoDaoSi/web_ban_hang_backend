const mongoose = requrie('mongoose');
const { Schema } = mongoose;

const staffSchema = new Schema({
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
    role: {
        type: String,
        enum: ["SALE","CASHIER"],
        default: "SALE"
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

const Staff = mongoose.model('staffs', staffSchema);

module.exports = Staff
