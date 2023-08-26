const db = require("../models/index.js")
const dotenv = require("dotenv")
dotenv.config()
const bcrypt = require('bcrypt');
const saltRounds = 10

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash
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

let createNewAdminService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (await checkEmailExist(body.email)) {
                resolve({
                    errCode: 1,
                    errMessage: 'Tài khoản đã tồn tại, vui lòng nhập email khác'
                })
            } else {
                await db.Users.create({
                    email: body.email,
                    password: hashPassword(body.password),
                    firstName: body.firstName,
                    lastName: body.lastName,
                    address: body.address,
                    roleId: 'R2', // role admin
                    phone: body.phone,
                    isApproved: false
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Create new admin success'
                })
            }
        } catch (e) {
            console.log(e)
            reject(e);
        }
    })
}





module.exports = { createNewAdminService }