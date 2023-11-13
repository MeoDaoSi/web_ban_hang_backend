const mongoose = requrie('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'Staff',
    },
    order_date: {
        type: Date,
        require: true,
    },
    delivery_date: {
        type: Date,
        require: true,
    },
    status: {
        type: String,
        enum: ["PENDING","DELIVERY","COMPLETE","REJECT"],
        default: "PENDING",
    },
})

const Order = mongoose.model('orders', orderSchema);

module.exports = Order
