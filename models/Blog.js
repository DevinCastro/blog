const { model, Schema } = require('mongoose')

const Blog = new Schema({
    title: {
        type: String,
        required: true
    },  
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

    
}, { timestamps: true })

module.exports = model('Blog', Blog)