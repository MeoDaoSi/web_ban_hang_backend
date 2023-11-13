const mongoose = requrie('mongoose');
const { Schema } = mongoose;

const merchandiseSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    description: {
        type: String,
        require: true,
        trim: true,
    },
    price: {
        type: Number,
        require: true,
        trim: true,
    },
    quantity: {
        type: Number,
        require: true,
        trim: true,
    },
    note: {
        type: String,
        require: true,
        trim: true,
    },
})

const Merchandise = mongoose.model('merchandises', merchandiseSchema);

module.exports = Merchandise
