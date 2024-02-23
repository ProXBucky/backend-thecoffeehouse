const db = require("../models/index.js")

let orderProductService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const maxId = await db.Users.max('id'); // Tìm ID lớn nhất trong bảng Users
            const newId = (maxId !== null) ? maxId + 1 : 1; // Tính toán ID mới
            if (body.cart || body.cartItems || body.cartTotalAmount) {
                const [user] = await db.Users.findOrCreate({
                    where: { email: body.email },
                    defaults: {
                        id: newId,
                        email: body.email,
                        firstName: body.firstName,
                        lastName: body.lastName,
                        phone: body.phone,
                        address: body.address,
                        roleId: 'R2'
                    }
                });

                const order = await db.Orders.create({
                    userId: user.id,
                    totalPrice: body.cartTotalAmount,
                    timeOrder: body.timeOrder,
                    statusPayment: 'SP1'
                })
                if (order && order.id) {
                    const productOrders = []
                    await body.cartItems.map((item) => {
                        productOrders.push({
                            orderId: order.id,
                            productId: item.id,
                            quantity: item.cartQuantity,
                        })
                    })
                    await body.cartItems.map(async (item) => {
                        let productTmp = await db.Products.findOne({ where: { id: item.id } })
                        if (!productTmp) {
                            resolve({
                                errCode: 3,
                                errMessage: 'Product is not found'
                            })
                        } else {
                            productTmp.quantitySold = productTmp.quantitySold += item.cartQuantity
                            await productTmp.save()
                        }
                    })

                    const tmp = await db.OrderDetail.bulkCreate(productOrders)
                    resolve({
                        // data: tmp,
                        errCode: 0,
                        errMessage: 'Order success'
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Error find Order'
                    })
                }
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllOrderService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const orderArr = await db.Orders.findAll({      // Tim cac Order chua tra tien
                where: { statusPayment: ['SP1', 'SP2'] },
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: [
                    { model: db.Users, as: 'UserData', attributes: ['id', 'email', 'firstName', 'lastName', 'address', 'phone'] },
                    { model: db.Allcodes, as: 'StatusData', attributes: ['valueEn', 'valueVn'] },
                    {
                        model: db.OrderDetail, as: 'OrderData', attributes: ['id', 'orderId', 'productId', 'quantity'],
                        include: [
                            { model: db.Products, as: 'ProductData', attributes: ['id', 'name', 'image', 'originalPrice'] }
                        ]
                    },
                ],
                order: [
                    ['statusPayment', 'ASC'],
                    ['timeOrder', 'DESC']
                ],
            })
            if (orderArr.length <= 0) {
                resolve({
                    errCode: 1,
                    errMessage: "No data",
                    data: 'None'
                })
            } else {
                resolve({
                    errCode: 0,
                    errMessage: "Get data success",
                    data: orderArr
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let payOrderService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const orderUpdate = await db.Orders.findOne({
                where: { id: body.id }
            })
            if (orderUpdate) {
                orderUpdate.statusPayment = 'SP2'
                await orderUpdate.save();
                resolve({
                    errCode: 0,
                    errMessage: "Update status success"
                })

            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Order not found'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deliverProductService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const orderUpdate = await db.Orders.findOne({
                where: { id: body.id }
            })
            if (orderUpdate) {
                orderUpdate.statusPayment = 'SP3'
                await orderUpdate.save();
                resolve({
                    errCode: 0,
                    errMessage: "Update status success"
                })

            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Order not found'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllOrderDeliveredService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const orderArr = await db.Orders.findAll({      // Tim cac Order chua tra tien
                where: { statusPayment: 'SP3' },
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: [
                    { model: db.Users, as: 'UserData', attributes: ['id', 'email', 'firstName', 'lastName', 'address', 'phone'] },
                    { model: db.Allcodes, as: 'StatusData', attributes: ['valueEn', 'valueVn'] },
                    {
                        model: db.OrderDetail, as: 'OrderData', attributes: ['id', 'orderId', 'productId', 'quantity'],
                        include: [
                            { model: db.Products, as: 'ProductData', attributes: ['id', 'name', 'image', 'originalPrice'] }
                        ]
                    },
                ],
                order: [
                    ['timeOrder', 'DESC']
                ],
            })
            if (orderArr.length <= 0) {
                resolve({
                    errCode: 1,
                    errMessage: "No data",
                    data: 'None'
                })
            } else {
                resolve({
                    errCode: 0,
                    errMessage: "Get data success",
                    data: orderArr
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getLastestOrderService = (limit) => {
    return new Promise(async (resolve, reject) => {
        if (!limit) limit = 5
        try {
            const orderArr = await db.Orders.findAll({      // Tim cac Order chua tra tien
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: [
                    { model: db.Users, as: 'UserData', attributes: ['id', 'email', 'firstName', 'lastName', 'address', 'phone'] },
                    { model: db.Allcodes, as: 'StatusData', attributes: ['valueEn', 'valueVn'] },
                ],
                order: [
                    ['timeOrder', 'DESC']
                ],
                limit: limit
            })
            if (orderArr.length <= 0) {
                resolve({
                    errCode: 1,
                    errMessage: "No data",
                    data: 'None'
                })
            } else {
                resolve({
                    errCode: 0,
                    errMessage: "Get data success",
                    data: orderArr
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteOrderService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                let res = await db.Orders.findOne({
                    where: { id: id }
                })
                if (res) {
                    await db.OrderDetail.destroy({
                        where: { orderId: res.id }
                    })
                    await res.destroy()
                    resolve({
                        errCode: 0,
                        errMessage: 'Delete order success'
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Dont find to order'
                    })
                }

            }
            resolve
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    orderProductService, getAllOrderService, payOrderService, deliverProductService, getAllOrderDeliveredService,
    getLastestOrderService, deleteOrderService
}