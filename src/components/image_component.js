const {
    getAll,
    getOne,
    edit,
    remove,
    create
} = require('../components/factory/index')

const Image = require('../models/Image')

const image_getAll = getAll(Image)
const image_getOne = getOne(Image)
const image_edit = edit(Image)
const image_remove = remove(Image)
const image_create = create(Image)

module.exports = {
    image_getAll,
    image_getOne,
    image_edit,
    image_remove,
    image_create,
}