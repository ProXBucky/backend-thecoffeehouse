const adminService = require('../services/adminService.js')

let getAllAdmin = async (req, res) => {
    try {
        let response = await adminService.getAllAdminService()
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let getAllAdminNotApproved = async (req, res) => {
    try {
        let response = await adminService.getAllAdminNotApprovedService()
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
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
        return res.status(404).json({
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
        return res.status(404).json({
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
        return res.status(404).json({
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
        return res.status(404).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let createNewProduct = async (req, res) => {
    try {
        const response = await adminService.createNewProductSevice(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let deleteProduct = async (req, res) => {
    try {
        let response = await adminService.deleteProductService(req.query.id)
        return res.status(200).json(response)

    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let updateProductData = async (req, res) => {
    try {
        let response = await adminService.updateProductDataService(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(404).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let createNewStore = async (req, res) => {
    try {
        const response = await adminService.createNewStoreService(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let uploadMultiImage = async (req, res) => {
    try {
        const response = await adminService.uploadMultiImageService(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let deleteStore = async (req, res) => {
    try {
        let response = await adminService.deleteStoreService(req.query.id)
        return res.status(200).json(response)

    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let updateStoreData = async (req, res) => {
    try {
        let response = await adminService.updateStoreDataService(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(404).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}


let approveAdminById = async (req, res) => {
    try {
        let response = await adminService.approveAdminByIdService(req.query.id)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(404).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let createNewManager = async (req, res) => {
    try {
        const response = await adminService.createNewManagerService(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}


module.exports = {
    getAllAdmin, getAdminById, deleteAdmin, updateAdminData, getAdminByEmail, createNewProduct, deleteProduct, updateProductData,
    createNewStore, uploadMultiImage, updateStoreData, deleteStore, approveAdminById, getAllAdminNotApproved, createNewManager
}