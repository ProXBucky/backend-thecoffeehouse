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
                    include: [
                        { model: db.Allcodes, as: 'categoryData', attributes: ['valueEn', 'valueVn'] },
                        { model: db.Allcodes, as: 'sizeData', attributes: ['valueEn', 'valueVn'] }
                    ],
                    order: [
                        ['category', 'DESC'],
                    ],
                })
            } else {
                productArr = await db.Products.findAll({
                    where: { category: category },
                    include: [
                        { model: db.Allcodes, as: 'categoryData', attributes: ['valueEn', 'valueVn'] },
                        { model: db.Allcodes, as: 'sizeData', attributes: ['valueEn', 'valueVn'] }
                    ],
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

let getAllStoreByCityService = (city) => {
    return new Promise(async (resolve, reject) => {
        try {
            let storeArr = []
            if (city === 'ALL') {
                storeArr = await db.Stores.findAll({
                    include: [
                        { model: db.ImageStore, as: 'imageData' },
                        { model: db.Allcodes, as: 'cityData', attributes: ['valueEn', 'valueVn'] },
                    ],
                })
            } else {
                storeArr = await db.Stores.findAll({
                    where: { cityId: city },
                    include: [
                        { model: db.ImageStore, as: 'imageData' },
                        { model: db.Allcodes, as: 'cityData', attributes: ['valueEn', 'valueVn'] },
                    ],
                })

            }
            if (storeArr.length > 0) {
                resolve({
                    errCode: 0,
                    errMessage: "Fetch data success",
                    data: storeArr
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


let getDetailProductByIdService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                const res = await db.Products.findOne({
                    where: { id: id },
                    include: [
                        { model: db.Allcodes, as: 'categoryData', attributes: ['valueEn', 'valueVn'] },
                    ]
                })
                if (!res) {
                    resolve({
                        errCode: 2,
                        errMessage: 'Product is not found'
                    })
                } else {
                    resolve({
                        errCode: 0,
                        errMessage: 'Get data succsess',
                        data: res
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = { getAllCodeByTypeService, getAllProductByCategoryService, getAllStoreByCityService, getDetailProductByIdService } 