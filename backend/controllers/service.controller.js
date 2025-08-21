const Service = require("../models/service.model")

exports.createService = async (req, res) => {

    try{

        const newService = new Service(req.body)

        await newService.save()

        res.status(201).json({message: "Service Created Successfully"})

    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }

}

exports.getServices = async (req, res) => {

    try{

        const services = await Service.find().populate('idUser', 'firstname lastname image')

        res.status(200).json(services)

    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }

}

exports.getMyServices = async (req, res) => {

    try{

        const services = await Service.find({idUser: req.params.id }).populate('idUser', 'firstname lastname image')
        res.status(200).json(services)

    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }

}

exports.getServiceById = async (req, res) => {

    try{

        const service = await Service.findById(req.params.id).populate('idUser', 'firstname lastname image')
        res.status(200).json(service)

    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }

}

exports.deleteService = async (req, res) => {

    try{

        await Service.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Service Deleted"
        })
    }catch(err) {
        res.status(500).json({
            message: err.message
        })
    }

}