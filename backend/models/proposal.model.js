const mongoose = require("mongoose")

const proposalSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    idService: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service"
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Proposal", proposalSchema);