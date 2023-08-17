const db = require("../models/index.js")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const randToken = require("rand-token")
const jwt = require("jsonwebtoken")
const session = require('express-session')

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

// let updateRefreshToken = (email, refreshToken) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let user = await db.Users.findOne({
//                 where: { email: email }
//             })
//             if (!user) {
//                 resolve({
//                     errCode: 1,
//                     errMessage: 'User not found'
//                 })
//             } else {
//                 user.refreshToken = refreshToken
//                 await user.save()
//                 resolve({
//                     errCode: 0,
//                     errMessage: 'Update success'
//                 })
//             }
//         } catch (e) {
//             console.log(e);
//             reject(e);
//         }
//     })
// }

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
                if (user && user.password) {
                    const checkPassword = bcrypt.compareSync(body.password, user.password)
                    if (checkPassword === true) {
                        if (user.isApproved === false) {
                            resolve({
                                errCode: 4,
                                errMessage: 'Account is not approved by admin'
                            })
                        } else if (user.isApproved === true) {
                            let accessToken = jwt.sign(
                                {
                                    data: user.password
                                }
                                , 'access',
                                { expiresIn: 60 * 60 }
                            );
                            resolve({
                                errCode: 0,
                                errMessage: 'Login success',
                                accessToken,
                                email: user.email
                            })
                        }
                    } else {
                        resolve({
                            errCode: 2,
                            errMessage: 'Password is wrong'
                        })
                    }
                } else {
                    resolve({
                        errCode: 3,
                        errMessage: 'User is not found '
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