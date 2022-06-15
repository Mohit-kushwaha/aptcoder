const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,

    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Employee', empSchema)