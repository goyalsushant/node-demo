import Service from "../models/Service.js"

export const createService = async (req, res) => {
    try {
        const service = await Service.create(req.body)
        res.json({ service })
    }
    catch (err) {
        res.status(500)
        res.json({ message: err.message })
    }
}

export const getService = async (req, res) => {
    try {
        const services = await Service.find()
        res.json({ services })
    }
    catch (err) {
        res.status(500)
        res.json({ message: err.message })
    }
}

export const updateService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body)
        res.json({ service })
    }
    catch (err) {
        res.status(500)
        res.json({ message: err.message })
    }
}

export const deleteService = async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.id)
        res.stauts(204)
    }
    catch (err) {
        res.status(500)
        res.json({ message: err.message })
    }
}