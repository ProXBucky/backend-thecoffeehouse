const express = require('express')
const userController = require("../controllers/userController.js")
const adminController = require("../controllers/adminController.js")
const appController = require("../controllers/appController.js")

const router = express.Router()

function initWebRoutes(app) {
    router.get('/', userController.getHome)
    router.get('/page', userController.getPage)
    router.post('/api/create-new-admin', userController.createNewAdmin)
    router.post('/api/login-admin', userController.loginAdmin)

    router.get('/api/get-all-admin', adminController.getAllAdmin)
    router.get('/api/get-admin-by-id', adminController.getAdminById)
    router.get('/api/get-admin-by-email', adminController.getAdminByEmail)
    router.delete('/api/delete-admin', adminController.deleteAdmin)
    router.put('/api/update-admin-data', adminController.updateAdminData)
    router.post('/api/create-new-product', adminController.createNewProduct)
    router.delete('/api/delete-product', adminController.deleteProduct)
    router.put('/api/update-product-data', adminController.updateProductData)

    router.get('/api/get-allcode-by-type', appController.getAllCodeByType)
    router.get('/api/get-all-product-by-category', appController.getAllProductByCategory)

    return app.use("/", router);
}

module.exports = initWebRoutes;
