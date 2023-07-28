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

let updateRefreshToken = (email, refreshToken) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { email: email }
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    errMessage: 'User not found'
                })
            } else {
                user.refreshToken = refreshToken
                await user.save()
                resolve({
                    errCode: 0,
                    errMessage: 'Update success'
                })
            }
        } catch (e) {
            console.log(e);
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
                if (user) {
                    let email = user.email
                    let password = user.password
                    const checkPassword = bcrypt.compareSync(body.password, password)
                    if (checkPassword === true) {
                        // let accessToken = jwt.sign(
                        //     {
                        //         data: password
                        //     }, 'access',
                        //     { expiresIn: 60 * 60 }
                        // );
                        // session.authorization = {
                        //     accessToken, email
                        // }
                        resolve({
                            errCode: 0,
                            errMessage: 'Login success',
                            userInfo: user
                        })
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

// let loginAdminService = (body) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             if (await checkEmailExist(body.email) === false) {
//                 resolve({
//                     errCode: 1,
//                     errMessage: 'User is not exist, please register new account'
//                 })
//             } else {
//                 let user = await db.Users.findOne({
//                     where: { email: body.email }
//                 })
//                 if (user) {
//                     const checkPassword = bcrypt.compareSync(body.password, user.password)
//                     if (checkPassword === true) {
//                         const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
//                         const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

//                         const dataForAccessToken = {
//                             email: user.email,
//                         };
//                         const accessToken = await jwt.sign(
//                             { dataForAccessToken },
//                             accessTokenSecret,
//                             {
//                                 algorithm: 'HS256',
//                                 expiresIn: accessTokenLife,
//                             },
//                         );
//                         if (!accessToken) {
//                             resolve({
//                                 errCode: 4,
//                                 errMessage: 'Login fail, please try again'
//                             });
//                         }

//                         let refreshToken = randToken.generate(process.env.REFRESH_TOKEN_SIZE); // tạo 1 refresh token ngẫu nhiên
//                         if (!user.refreshToken) {
//                             // Nếu user này chưa có refresh token thì lưu refresh token đó vào database
//                             await updateRefreshToken(user.email, refreshToken);
//                         } else {
//                             // Nếu user này đã có refresh token thì lấy refresh token đó từ database
//                             refreshToken = user.refreshToken;
//                         }
//                         resolve({
//                             errCode: 0,
//                             errMessage: 'Login success',
//                             accessToken,
//                             refreshToken,
//                             userInfo: user
//                         })
//                     } else {
//                         resolve({
//                             errCode: 2,
//                             errMessage: 'Password is wrong'
//                         })
//                     }
//                 } else {
//                     resolve({
//                         errCode: 3,
//                         errMessage: 'User is not found '
//                     })
//                 }
//             }
//         } catch (e) {
//             console.log(e);
//             reject(e);
//         }
//     })
// }

module.exports = { createNewAdminService, loginAdminService }