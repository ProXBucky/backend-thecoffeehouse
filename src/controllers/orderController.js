const orderService = require('../services/orderService.js')

let orderProduct = async (req, res) => {
    try {
        let response = await orderService.orderProductService(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getAllOrder = async (req, res) => {
    try {
        let response = await orderService.getAllOrderService()
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let payOrder = async (req, res) => {
    try {
        let response = await orderService.payOrderService(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let deliverProduct = async (req, res) => {
    try {
        let response = await orderService.deliverProductService(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getAllOrderDelivered = async (req, res) => {
    try {
        let response = await orderService.getAllOrderDeliveredService()
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let getLastestOrder = async (req, res) => {
    try {
        let response = await orderService.getLastestOrderService(+req.query.limit)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

let deleteOrder = async (req, res) => {
    try {
        let response = await orderService.deleteOrderService(req.query.id)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

module.exports = { orderProduct, getAllOrder, payOrder, deliverProduct, getAllOrderDelivered, getLastestOrder, deleteOrder }