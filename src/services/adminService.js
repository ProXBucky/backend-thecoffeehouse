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
            const allAdmin = await db.Users.findAll({
                where: { roleId: 'R1', isApproved: true }
            })
            if (allAdmin.length <= 0) {
                resolve({
                    errCode: 1,
                    errMessage: 'No data of admin',
                    data: 'None'
                })
            } else {
                resolve({
                    errCode: 0,
                    errMessage: 'Get all admin success',
                    data: allAdmin
                })
            }
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

let getAllAdminNotApprovedService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allAdmin = await db.Users.findAll({
                where: { roleId: 'R1', isApproved: false }
            })
            if (allAdmin.length <= 0) {
                resolve({
                    errCode: 1,
                    errMessage: 'No data of admin',
                    data: 'None'
                })
            } else {
                resolve({
                    errCode: 0,
                    errMessage: 'Get all admin success',
                    data: allAdmin
                })
            }
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

let approveAdminByIdService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const admin = await db.Users.findOne({
                where: { id: id }
            })
            if (admin) {
                admin.isApproved = true
                await admin.save();
                resolve({
                    errCode: 0,
                    errMessage: "Update data success"
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Admin not found'
                })
            }
        }
        catch (e) {
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
            if (!body) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter'
                })
            }
            await db.Products.create({
                name: body.name,
                originalPrice: body.originalPrice,
                category: body.category,
                // size: body.size,
                image: body.image,
                description: body.description,
                quantitySold: 0
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
                // productUpdate.size = body.size
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

let createNewStoreService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Stores.create({
                id: body.id,
                nameStore: body.nameStore,
                address: body.address,
                cityId: body.cityId,
                description: body.description,
                shortDescription: body.shortDescription,
                storeId: body.storeId,
                mapLink: body.mapLink,
                mapHTML: body.mapHTML,
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

let uploadMultiImageService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.ImageStore.bulkCreate(body)
            resolve({
                errCode: 0,
                errMessage: "Upload store's images success"
            })
        } catch (e) {
            reject(e);
        }
    })
}

let deleteStoreService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Stores.destroy({
                where: { id: id }
            });
            await db.ImageStore.destroy({
                where: { storeId: id }
            })
            resolve({
                errCode: 0,
                errMessage: 'Delete product success'
            })
        } catch (e) {
            reject(e)
        }
    })
}

let updateStoreDataService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.ImageStore.destroy({
                where: { storeId: body.id }
            })
            await uploadMultiImageService(body.image)
            const storeUpdate = await db.Stores.findOne({
                where: { id: body.id }
            })
            if (storeUpdate) {
                storeUpdate.nameStore = body.nameStore
                storeUpdate.address = body.address
                storeUpdate.cityId = body.cityId
                storeUpdate.description = body.description
                storeUpdate.shortDescription = body.shortDescription
                storeUpdate.mapLink = body.mapLink
                storeUpdate.mapHTML = body.mapHTML
                await storeUpdate.save();
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
    deleteProductService, updateProductDataService, createNewStoreService, uploadMultiImageService, updateStoreDataService, deleteStoreService,
    approveAdminByIdService, getAllAdminNotApprovedService
}