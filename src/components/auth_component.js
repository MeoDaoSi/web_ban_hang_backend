const User = require('../models/User');
const register = async (req, res) => {
    try {
        const user = new User(req.body);
        user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json('error');
    }
}

const login = async (req, res) => {
    const { phone_number, password } = req.body; 
    try {
        const user = await User.findOne({ phone: phone_number });
        if( !user ){
            throw new Error('User not found')
        }
        if( user.password != password ){
            throw new Error('Invalid password')
        }
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json('error');
    }
}

const logout = async (req, res) => {
    try {
        res.status(200).json('success');
    } catch (error) {
        res.status(500).json('error');
    }
}

const getMe = async (req, res) => {
    res.status(200).json(req.user)
}

module.exports = {
    register,
    logout,
    login,
    getMe
}