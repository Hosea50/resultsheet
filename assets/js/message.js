const mongoose = require('mongoose')
const messageSchema = mongoose.Schema({
    fullname: {
        type: String,
        require: true;
    },
    email: {
        type: String,
        require: true
    },
    subject: {
        type: String
    },
    message: {
        type: String,
        requied: true
    }
})

const message = mongoose.model("message, messageSchema");
module.exports = messageModel;

