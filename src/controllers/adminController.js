const adminService = require('../services/adminService.js')

let getAllAdmin = async (req, res) => {
    try {
        let response = await adminService.getAllAdminService()
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let getAdminById = async (req, res) => {
    try {
        let response = await adminService.getAdminByIdService(req.query.id)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let deleteAdmin = async (req, res) => {
    try {
        let response = await adminService.deleteAdminService(req.query.id)
        return res.status(200).json(response)

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let updateAdminData = async (req, res) => {
    try {
        let response = await adminService.updateAdminDataService(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}


let getAdminByEmail = async (req, res) => {
    try {
        let response = await adminService.getAdminByEmailService(req.query.email)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}


module.exports = { getAllAdmin, getAdminById, deleteAdmin, updateAdminData, getAdminByEmail }