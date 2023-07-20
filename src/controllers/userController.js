const userService = require('../services/userService.js')
const db = require("../models/index.js")

let getHome = async (req, res) => {
    let user = await db.Users.findAll()
    return res.render('pages', {
        users: user
    })
}

let getPage = (req, res) => {
    res.send('Hello Page')
}

let createNewAdmin = async (req, res) => {
    let respone = await userService.createNewAdminService(req.body)
    return res.status(200).json(respone)
}

let loginAdmin = async (req, res) => {
    try {
        let respone = await userService.loginAdminService(req.body)
        return res.status(200).json(respone)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error server'
        })
    }
}

module.exports = { getHome, getPage, createNewAdmin, loginAdmin }