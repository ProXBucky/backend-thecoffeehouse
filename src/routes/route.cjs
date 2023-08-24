const express = require('express')
const userController = require("../controllers/userController.js")
const adminController = require("../controllers/adminController.js")
const appController = require("../controllers/appController.js")
const orderController = require("../controllers/orderController.js")
const jwt = require("jsonwebtoken")
const db = require("../models/index.js")
const bcrypt = require('bcrypt');



const router = express.Router()

function initWebRoutes(app) {

    const authenManager = (req, res, next) => {
        // const token = req.cookies.accessToken;
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        // console.log('test1', token)
        if (!token) {
            return res.status(403).json({
                errCode: 'A',
                errMessage: "You are no Authenticated"
            });
        } else {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if (err) return res.status(404).json({
                    errCode: 'B',
                    errMessage: "Token wrong"
                });
                req.roleId = decoded.roleId;
                req.id = decoded.id;
                if (req.roleId == 'R1') {
                    next();
                } else {
                    res.status(403).json({
                        errCode: 'C',
                        errMessage: `You are not manager`
                    })
                }
            })
        }
    }

    const verifyUser = (req, res, next) => {
        // const token = req.cookies.accessToken;
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        // console.log('test2', token)
        if (!token) {
            return res.status(403).json({
                errCode: 'A',
                errMessage: "You are no Authenticated"
            });
        } else {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if (err) return res.status(404).json({
                    errCode: 'B',
                    errMessage: "Token wrong"
                });
                req.roleId = decoded.roleId;
                req.id = decoded.id;
                next();
            })
        }
    }

    let checkEmailExist = (emailNew) => {
        return new Promise(async (resolve, reject) => {
            try {
                let emailExist = await db.Users.findOne({
                    where: { email: emailNew }
                })
                if (emailExist) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            } catch (e) {
                console.log(e);
                reject(e)
            }
        })
    }

    router.post('/api/login', async (req, res) => {
        if (await checkEmailExist(req.body.email) === false) {
            res.status(403).json({
                errCode: 1,
                errMessage: 'User is not exist, please register new account',
            })
        } else {
            let user = await db.Users.findOne({
                where: { email: req.body.email, roleId: ['R1', 'R2'] }
            })
            if (user && user.password) {
                const checkPassword = bcrypt.compareSync(req.body.password, user.password)
                if (checkPassword === true) {
                    if (user.isApproved === false) {
                        res.status(403).json({
                            errCode: 4,
                            errMessage: 'Account is not approved by admin',
                        })
                    }
                    else if (user.isApproved === true) {
                        let accessToken = jwt.sign(
                            { id: user.id, roleId: user.roleId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 60 * 60 }
                        );
                        res.cookie('accessToken', accessToken)
                        res.json({
                            errCode: 0,
                            errMessage: 'Login success',
                            accessToken,
                            email: user.email
                        })
                    }
                } else {
                    res.status(403).json({
                        errCode: 2,
                        errMessage: 'Password is wrong',
                    })
                }
            } else {
                res.status(403).json({
                    errCode: 3,
                    errMessage: 'You are not manager or admin',
                })
            }
        }
    })

    router.get('/api/logout', (req, res) => {
        res.clearCookie('accessToken')
        return res.status(200).json({
            errCode: 0,
            errMessage: "Log out success"
        })
    })

    router.get('/api/pagination', verifyUser, (req, res) => {
        return res.json({ errCode: 0, roleId: req.roleId, id: req.id })
    })

    router.get('/', userController.getHome)
    router.post('/api/create-new-admin', userController.createNewAdmin)


    //admin
    router.put('/api/approve-admin-by-id', authenManager, adminController.approveAdminById)
    router.delete('/api/delete-admin', authenManager, adminController.deleteAdmin)
    router.put('/api/update-admin-data', verifyUser, adminController.updateAdminData)
    //
    router.get('/api/get-all-admin-not-approved', adminController.getAllAdminNotApproved)
    router.get('/api/get-all-admin', adminController.getAllAdmin)
    router.get('/api/get-admin-by-id', adminController.getAdminById)


    //product
    router.post('/api/create-new-product', verifyUser, adminController.createNewProduct)
    router.delete('/api/delete-product', authenManager, adminController.deleteProduct)
    router.put('/api/update-product-data', verifyUser, adminController.updateProductData)


    //store
    router.post('/api/create-new-store', verifyUser, adminController.createNewStore)
    router.post('/api/upload-multi-image-store', verifyUser, adminController.uploadMultiImage)
    router.delete('/api/delete-store', authenManager, adminController.deleteStore)
    router.put('/api/update-store-data', verifyUser, adminController.updateStoreData)


    //app
    router.get('/api/get-allcode-by-type', appController.getAllCodeByType)
    router.get('/api/get-all-product-by-category', appController.getAllProductByCategory)
    router.get('/api/get-all-store-by-city', appController.getAllStoreByCity)
    router.get('/api/get-detail-product-by-id', appController.getDetailProductById)
    router.get('/api/get-detail-store-by-id', appController.getDetailStoreById)
    router.get('/api/get-best-seller', appController.getBestSeller)
    router.get('/api/get-statistics-app', appController.getStatisticsApp)


    //order
    router.post('/api/order-product', orderController.orderProduct)
    router.get('/api/get-lastest-order', orderController.getLastestOrder)
    router.get('/api/get-all-order', orderController.getAllOrder)
    router.get('/api/get-all-order-delivered', orderController.getAllOrderDelivered)
    //
    router.put('/api/pay-order', verifyUser, orderController.payOrder)
    router.put('/api/deliver-product', verifyUser, orderController.deliverProduct)


    return app.use("/", router);
}

module.exports = initWebRoutes;
