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
    },
    blogs: [{
        type: Schema.Types.ObjectId,
        ref: "Blog"
    }]
    
}, { timestamps: true })

module.exports = model('User', User)