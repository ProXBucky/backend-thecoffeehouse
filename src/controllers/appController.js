const appService = require("../services/appService.js")

let getAllCodeByType = async (req, res) => {
    try {
        let response = await appService.getAllCodeByTypeService(req.query.type)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getAllProductByCategory = async (req, res) => {
    try {
        let response = await appService.getAllProductByCategoryService(req.query.category, +req.query.page, +req.query.itemsPerPage, +req.query.limit)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getAllStoreByCity = async (req, res) => {
    try {
        let response = await appService.getAllStoreByCityService(req.query.city, +req.query.page, +req.query.itemsPerPage, +req.query.limit)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getDetailProductById = async (req, res) => {
    try {
        let response = await appService.getDetailProductByIdService(req.query.id)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getDetailStoreById = async (req, res) => {
    try {
        let response = await appService.getDetailStoreByIdService(req.query.id)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getBestSeller = async (req, res) => {
    try {
        let response = await appService.getBestSellerService(+req.query.limit)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getStatisticsApp = async (req, res) => {
    try {
        let response = await appService.getStatisticsAppService()
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}


module.exports = { getAllCodeByType, getAllProductByCategory, getAllStoreByCity, getDetailProductById, getDetailStoreById, getBestSeller, getStatisticsApp }