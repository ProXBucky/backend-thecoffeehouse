const db = require("../models/index.js")
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
                    errMessage: 'User is exist, please type diffirent email'
                })
            } else {
                await db.Users.create({
                    email: body.email,
                    password: hashPassword(body.password),
                    firstName: body.firstName,
                    lastName: body.lastName,
                    address: body.address,
                    roleId: 'R1', // role admin
                    phone: body.phone
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

let loginAdminService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (await checkEmailExist(body.email) === false) {
                resolve({
                    errCode: 1,
                    errMessage: 'User is not exist, please register new account'
                })
            } else {
                let user = await db.Users.findOne({
                    where: { email: body.email }
                })
                const checkPassword = bcrypt.compareSync(body.password, user.password) // true
                if (checkPassword === true) {
                    resolve({
                        errCode: 0,
                        errMessage: 'Login success'
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Password is wrong'
                    })
                }
            }
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
}

module.exports = { createNewAdminService, loginAdminService }