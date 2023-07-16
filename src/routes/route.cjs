const express = require('express')
const userController = require("../controllers/userController.js")
const adminController = require("../controllers/adminController.js")

const router = express.Router()

function initWebRoutes(app) {
    router.get('/', userController.getHome)
    router.get('/page', userController.getPage)


    router.post('/api/create-new-admin', adminController.createNewAdmin)
    router.get('/api/get-all-admin', adminController.getAllAdmin)

    return app.use("/", router);
}

module.exports = initWebRoutes;
