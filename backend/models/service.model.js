const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})


module.exports = mongoose.model("Service", serviceSchema);