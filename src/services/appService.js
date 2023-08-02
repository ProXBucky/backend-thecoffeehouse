const { response } = require("express")
const db = require("../models/index.js")

let getAllCodeByTypeService = (type) => {
    return new Promise(async (resolve, reject) => {
        try {
            const allCodeArr = await db.Allcodes.findAll({
                where: { type: type }
            })
            if (!allCodeArr) {
                resolve({
                    errCode: 1,
                    errMessage: "Fetch data fail"
                })
            } else {
                resolve({
                    errCode: 0,
                    errMessage: "Fetch data success",
                    data: allCodeArr
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllProductByCategoryService = (category) => {
    return new Promise(async (resolve, reject) => {
        try {
            let productArr = []
            if (category === 'ALL') {
                productArr = await db.Products.findAll({
                    // attributes: {
                    //     exclude: ['image'],
                    // },
                    include: [{ model: db.Allcodes, as: 'categoryData', attributes: ['valueEn', 'valueVn'] }],
                })

            } else {
                productArr = await db.Products.findAll({
                    where: { category: category },
                    // attributes: {
                    //     exclude: ['image'],
                    // },
                    include: [{ model: db.Allcodes, as: 'categoryData', attributes: ['valueEn', 'valueVn'] }],
                })
            }
            if (productArr.length > 0) {
                resolve({
                    errCode: 0,
                    errMessage: "Fetch data success",
                    data: productArr.reverse()
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Fetch data fail"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = { getAllCodeByTypeService, getAllProductByCategoryService } 