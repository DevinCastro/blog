const { model, Schema } = require('mongoose')

const User = new Schema({
    name: {
        type: String,
        required: true
    },  
    username: {
        type: String,
        required: true,
        unique: true
    }
    
}, { timestamps: true })

module.exports = model('User', User)