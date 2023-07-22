const adminService = require('../services/adminService.js')

let getAllAdmin = async (req, res) => {
    try {
        let respone = await adminService.getAllAdminService()
        return res.status(200).json(respone)
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
        let respone = await adminService.getAdminByIdService(req.query.id)
        return res.status(200).json(respone)
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
        let respone = await adminService.deleteAdminService(req.query.id)
        return res.status(200).json(respone)

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
        let respone = await adminService.updateAdminDataService(req.body)
        return res.status(200).json(respone)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

module.exports = { getAllAdmin, getAdminById, deleteAdmin, updateAdminData }