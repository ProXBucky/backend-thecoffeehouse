const db = require("../models/index.js")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

let getAllAdminService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allAdmin = await db.Users.findAll()
            resolve({
                errCode: 0,
                errMessage: 'Get all admin success',
                data: allAdmin.reverse()
            })
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

let getAdminByIdService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { id: id }
            })
            if (user) {
                resolve({
                    errCode: 0,
                    errMessage: "Get admin data success",
                    data: user
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Data is not found"
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}

let getAdminByEmailService = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { email: email },
                attributes: { exclude: ['password'] }
            })
            if (user) {
                resolve({
                    errCode: 0,
                    errMessage: "Get admin data success",
                    data: user
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Data is not found"
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}

let deleteAdminService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Users.destroy({
                where: { id: id }
            });
            resolve({
                errCode: 0,
                errMessage: 'Delete admin success'
            })
        } catch (e) {
            reject(e)
        }
    })
}

let updateAdminDataService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userUpdate = await db.Users.findOne({
                where: { id: body.id }
            })
            if (userUpdate) {
                // Dont change email
                userUpdate.password = hashPassword(body.password)
                userUpdate.firstName = body.firstName
                userUpdate.lastName = body.lastName
                userUpdate.address = body.address
                userUpdate.phone = body.phone
                await userUpdate.save();
                resolve({
                    errCode: 0,
                    errMessage: "Update data success"
                })

            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'User not found'
                })
            }

        } catch (e) {
            reject(e);
        }
    })
}

let createNewProductSevice = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Products.create({
                name: body.name,
                originalPrice: body.originalPrice,
                category: body.category,
                size: body.size,
                image: body.image,
                description: body.description
            })
            resolve({
                errCode: 0,
                errMessage: "Create product success"
            })
        } catch (e) {
            reject(e);
        }
    })
}

let deleteProductService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Products.destroy({
                where: { id: id }
            });
            resolve({
                errCode: 0,
                errMessage: 'Delete product success'
            })
        } catch (e) {
            reject(e)
        }
    })
}

let updateProductDataService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const productUpdate = await db.Products.findOne({
                where: { id: body.id }
            })
            if (productUpdate) {
                productUpdate.name = body.name
                productUpdate.description = body.description
                productUpdate.category = body.category
                productUpdate.size = body.size
                productUpdate.image = body.image
                productUpdate.originalPrice = body.originalPrice
                await productUpdate.save();
                resolve({
                    errCode: 0,
                    errMessage: "Update data success"
                })

            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'User not found'
                })
            }

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllAdminService, getAdminByIdService, deleteAdminService, updateAdminDataService, getAdminByEmailService, createNewProductSevice,
    deleteProductService, updateProductDataService
}