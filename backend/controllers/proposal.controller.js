const Proposal = require("../models/proposal.model")

exports.createProposal = async (req, res) => {

    try {

        const newProposal = new Proposal(req.body);
        await newProposal.save()
        res.status(201).json({
            message: "Proposal Created Successfully"
        })
    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }

}

exports.getProposalByServiceID = async (req, res) => {

    try {

        const proposals = await Proposal.find({idService: req.params.id}).populate("idUser", "firstname lastname image")

        res.status(200).json(proposals)

    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }

}

exports.getProposalsByUserID = async (req, res) => {

    try {

        const proposals = await Proposal.find({idUser: req.params.id}).populate("idService", "name")
        res.status(200).json(proposals)
    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }

}

exports.acceptProposal = async (req, res) => {

    try {

        await Proposal.findByIdAndUpdate(req.params.id, {status: true})

        res.status(200).json({
            message: "Proposal Updated"
        })

    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }

}

exports.deleteProposal = async (req, res) => {

    try {

        await Proposal.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Proposal Deleted"
        })


    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }

}