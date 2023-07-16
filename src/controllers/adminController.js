// import adminService from "../services/adminService.js"
const adminService = require('../services/adminService.js')

let createNewAdmin = async (req, res) => {
    let respone = await adminService.createNewAdminService(req.body)
    return res.status(200).json(respone)
}

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

module.exports = { createNewAdmin, getAllAdmin }