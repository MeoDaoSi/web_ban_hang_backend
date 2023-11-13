const mongoose = requrie('mongoose');
const { Schema } = mongoose;

const imageSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    merchandise: {
        type: Schema.Types.ObjectId,
        ref: 'Merchandise',
    },
})

const Image = mongoose.model('images', imageSchema);

module.exports = Image
