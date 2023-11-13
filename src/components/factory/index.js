const getAll = (Model) => {
    return async (req, res) => {
        try {
            const instance = await Model.find()
            res.status(200).json('Success')
        } catch (error) {
            res.status(500).json('error')
        }
    }
}
const getOne = (Model) => {
    return async (req, res) => {
        const _id = req.params
        try {
            const instance = await Model.findById(_id);
            if(!instance){
                throw new Error('Not found')
            }
            res.status(200).json(instance)
        } catch (error) {
            res.status(500).json('error')
        }
    }
}

const create = (Model) => {
    return async (req, res) => {
        try {
            const instance = new Model(req.body)
            await instance.save();
            res.status(201).json(instance)
        } catch (error) {
            res.status(500).json('error')
        }
    }
}

const remove = (Model) => {
    return async (req, res) => {
        const _id = req.params
        try {
            const instance = await Model.findAndRemove(_id)
            res.status(200).json('Success')
        } catch (error) {
            res.status(500).json('error')
        }
    }
}

const edit = (Model) => {
    return async (req, res) => {
        const _id = req.params
        const update = req.body;
        console.log(update);
        try {
            const instance = await Model.findOneAndUpdate(
                { _id: _id, },
                update
            )
            res.status(200).json('Success')
        } catch (error) {
            res.status(500).json('error')
        }
    }
}

module.exports = {
    getAll,
    getOne,
    edit,
    remove,
    create
}