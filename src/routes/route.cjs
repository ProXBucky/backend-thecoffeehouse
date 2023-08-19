const express = require('express')
const userController = require("../controllers/userController.js")
const adminController = require("../controllers/adminController.js")
const appController = require("../controllers/appController.js")
const orderController = require("../controllers/orderController.js")


const router = express.Router()

function initWebRoutes(app) {
    router.get('/', userController.getHome)
    router.get('/page', userController.getPage)
    router.post('/api/create-new-admin', userController.createNewAdmin)
    router.post('/api/login-admin', userController.loginAdmin)

    //admin
    router.put('/api/approve-admin-by-id', adminController.approveAdminById)
    router.get('/api/get-all-admin-not-approved', adminController.getAllAdminNotApproved)
    router.get('/api/get-all-admin', adminController.getAllAdmin)
    router.get('/api/get-admin-by-id', adminController.getAdminById)
    router.delete('/api/delete-admin', adminController.deleteAdmin)
    router.put('/api/update-admin-data', adminController.updateAdminData)
    //product
    router.post('/api/create-new-product', adminController.createNewProduct)
    router.delete('/api/delete-product', adminController.deleteProduct)
    router.put('/api/update-product-data', adminController.updateProductData)
    //store
    router.post('/api/create-new-store', adminController.createNewStore)
    router.post('/api/upload-multi-image-store', adminController.uploadMultiImage)
    router.delete('/api/delete-store', adminController.deleteStore)
    router.put('/api/update-store-data', adminController.updateStoreData)


    router.get('/api/get-allcode-by-type', appController.getAllCodeByType)
    router.get('/api/get-all-product-by-category', appController.getAllProductByCategory)
    router.get('/api/get-all-store-by-city', appController.getAllStoreByCity)
    router.get('/api/get-detail-product-by-id', appController.getDetailProductById)
    router.get('/api/get-detail-store-by-id', appController.getDetailStoreById)
    router.get('/api/get-best-seller', appController.getBestSeller)
    router.get('/api/get-statistics-app', appController.getStatisticsApp)


    router.post('/api/order-product', orderController.orderProduct)
    router.get('/api/get-all-order', orderController.getAllOrder)
    router.get('/api/get-all-order-delivered', orderController.getAllOrderDelivered)
    router.put('/api/pay-order', orderController.payOrder)
    router.put('/api/deliver-product', orderController.deliverProduct)
    router.get('/api/get-lastest-order', orderController.getLastestOrder)


    return app.use("/", router);
}

module.exports = initWebRoutes;
