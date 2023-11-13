const mongoose = requrie('mongoose');
const { Schema } = mongoose;

const detailSchema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
    },
    merchandise: {
        type: Schema.Types.ObjectId,
        ref: 'Merchandise',
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
    discount: {
        type: Number,
        require: true,
        trim: true,
    },
})

const Detail = mongoose.model('details', detailSchema);

module.exports = Detail
