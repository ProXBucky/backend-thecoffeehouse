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
                data: allAdmin
            })
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

let deleteAdminService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userDelete = await db.Users.findOne({
                where: { id: id }
            })
            await userDelete.destroy();
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

module.exports = { getAllAdminService, deleteAdminService, updateAdminDataService }