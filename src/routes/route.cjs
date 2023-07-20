const express = require('express')
const userController = require("../controllers/userController.js")
const adminController = require("../controllers/adminController.js")

const router = express.Router()

function initWebRoutes(app) {
    router.get('/', userController.getHome)
    router.get('/page', userController.getPage)
    router.post('/api/create-new-admin', userController.createNewAdmin)
    router.post('/api/login-admin', userController.loginAdmin)



    router.get('/api/get-all-admin', adminController.getAllAdmin)
    router.delete('/api/delete-admin', adminController.deleteAdmin)
    router.put('/api/update-admin-data', adminController.updateAdminData)

    return app.use("/", router);
}

module.exports = initWebRoutes;
