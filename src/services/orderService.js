const db = require("../models/index.js")

let orderProductService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (body.cart || body.cartItems || body.cartTotalAmount) {
                const [user] = await db.Users.findOrCreate({
                    where: { email: body.email },
                    defaults: {
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
                            price: item.originalPrice
                        })
                    })
                    const tmp = await db.OrderDetail.bulkCreate(productOrders)
                    resolve({
                        data: tmp
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
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: [
                    { model: db.Users, as: 'UserData', attributes: ['id', 'email', 'firstName', 'lastName', 'address', 'phone'] },
                    { model: db.Allcodes, as: 'StatusData', attributes: ['valueEn', 'valueVn'] },
                    {
                        model: db.OrderDetail, as: 'OrderData', attributes: ['id', 'orderId', 'productId', 'quantity', 'price'],
                        include: [
                            { model: db.Products, as: 'ProductData', attributes: ['id', 'name', 'image'] }
                        ]

                    },
                ],
                order: [
                    ['statusPayment', 'ASC']
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

module.exports = { orderProductService, getAllOrderService, payOrderService }