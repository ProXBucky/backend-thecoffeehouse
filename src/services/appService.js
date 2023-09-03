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

let getAllProductByCategoryService = (category, page, itemsPerPage, limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let productArr = []
            let dataProduct = [];
            let totalPages = 0;
            // Không có Limit
            if (limit == 0) {
                if (category === 'ALL') {
                    productArr = await db.Products.findAll({
                        include: [
                            { model: db.Allcodes, as: 'categoryData', attributes: ['valueEn', 'valueVn'] }
                        ],
                        order: [
                            ['category', 'ASC'],
                        ],
                    })
                    // Pagination
                    const startIndex = (page - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    dataProduct = productArr.slice(startIndex, endIndex);
                    totalPages = Math.ceil(productArr.length / itemsPerPage);
                    // totalPages = itemsPerPage;
                } else {
                    productArr = await db.Products.findAll({
                        where: { category: category },
                        include: [
                            { model: db.Allcodes, as: 'categoryData', attributes: ['valueEn', 'valueVn'] }
                        ],
                    })
                    // Pagination
                    const startIndex = (page - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    dataProduct = productArr.slice(startIndex, endIndex);
                    totalPages = Math.ceil(productArr.length / itemsPerPage);
                }
            }
            // Có limit
            else if ((page == 0) || (itemsPerPage == 0)) {
                if (category === 'ALL') {
                    productArr = await db.Products.findAll({
                        limit: limit,
                        include: [
                            { model: db.Allcodes, as: 'categoryData', attributes: ['valueEn', 'valueVn'] }
                        ],
                        order: [
                            ['category', 'ASC'],
                        ],
                    })
                } else {
                    productArr = await db.Products.findAll({
                        limit: limit,
                        where: { category: category },
                        include: [
                            { model: db.Allcodes, as: 'categoryData', attributes: ['valueEn', 'valueVn'] }
                        ],
                    })
                }
            }
            if (productArr.length > 0) {
                if (limit == 0) {
                    resolve({
                        errCode: 0,
                        errMessage: "Fetch data success",
                        // dataSlice: dataProduct,
                        data: dataProduct,
                        totalPages: totalPages,
                    })
                }
                else if ((page == 0) || (itemsPerPage == 0)) {
                    resolve({
                        errCode: 0,
                        errMessage: "Fetch data success",
                        data: productArr,
                    })
                }
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Fetch data fail",
                    data: 'None'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllStoreByCityService = (city, page, itemsPerPage, limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let storeArr = []
            let dataStore = [];
            let totalPages = 0;
            if (limit == 0) {
                if (city === 'ALL') {
                    storeArr = await db.Stores.findAll({
                        include: [
                            { model: db.ImageStore, as: 'imageData' },
                            { model: db.Allcodes, as: 'cityData', attributes: ['valueEn', 'valueVn'] },
                        ],
                    })
                    // Pagination
                    const startIndex = (page - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    dataStore = storeArr.slice(startIndex, endIndex);
                    totalPages = Math.ceil(storeArr.length / itemsPerPage);
                } else {
                    storeArr = await db.Stores.findAll({
                        where: { cityId: city },
                        include: [
                            { model: db.ImageStore, as: 'imageData' },
                            { model: db.Allcodes, as: 'cityData', attributes: ['valueEn', 'valueVn'] },
                        ],
                    })
                    // Pagination
                    const startIndex = (page - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    dataStore = storeArr.slice(startIndex, endIndex);
                    totalPages = Math.ceil(storeArr.length / itemsPerPage);
                }
            }
            else if ((page == 0) || (itemsPerPage == 0)) {
                if (city === 'ALL') {
                    storeArr = await db.Stores.findAll({
                        limit: limit,
                        include: [
                            { model: db.ImageStore, as: 'imageData' },
                            { model: db.Allcodes, as: 'cityData', attributes: ['valueEn', 'valueVn'] },
                        ],
                    })
                } else {
                    storeArr = await db.Stores.findAll({
                        limit: limit,
                        where: { cityId: city },
                        include: [
                            { model: db.ImageStore, as: 'imageData' },
                            { model: db.Allcodes, as: 'cityData', attributes: ['valueEn', 'valueVn'] },
                        ],
                    })
                }
            }
            if (storeArr.length > 0) {
                if (limit == 0) {
                    resolve({
                        errCode: 0,
                        errMessage: "Fetch data success",
                        data: dataStore,
                        totalPages: totalPages,
                    })
                }
                else if ((page == 0) || (itemsPerPage == 0)) {
                    resolve({
                        errCode: 0,
                        errMessage: "Fetch data success",
                        data: storeArr,
                    })
                }
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Fetch data fail",
                    data: 'None'
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

let getDetailStoreByIdService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                const res = await db.Stores.findOne({
                    where: { id: id },
                })
                const resImg = await db.ImageStore.findAll({
                    where: { storeId: id }
                })
                if (!res || !resImg) {
                    resolve({
                        errCode: 2,
                        errMessage: 'Product is not found'
                    })
                } else {
                    resolve({
                        errCode: 0,
                        errMessage: 'Get data succsess',
                        data: res,
                        imgData: resImg
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getBestSellerService = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let productArr = []
            productArr = await db.Products.findAll({
                limit: limit,
                include: [
                    { model: db.Allcodes, as: 'categoryData', attributes: ['valueEn', 'valueVn'] },
                ],
                order: [
                    ['quantitySold', 'DESC'],
                    ['id', 'DESC']
                ],
            })
            if (productArr.length > 0) {
                resolve({
                    errCode: 0,
                    errMessage: "Fetch data success",
                    data: productArr
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Fetch data fail",
                    data: 'None'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getStatisticsAppService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // count admin
            const totalAdmins = await db.Users.count({
                where: { roleId: ['R1', 'R2'], isApproved: 1 }
            });

            // count product
            const totalProducts = await db.Products.count();

            // count store
            const totalStores = await db.Stores.count();

            // count orders
            const totalOrders = await db.Orders.count();

            // calculate income
            const totalIncome = await db.Orders.sum(
                'totalPrice',
                {
                    where: { statusPayment: ['SP2', 'SP3'] },
                });
            if (totalAdmins && totalProducts && totalStores && totalOrders && totalIncome) {
                resolve({
                    errCode: 0,
                    errMessage: 'Get data success',
                    data: {
                        totalAdmins, totalProducts, totalOrders, totalStores, totalIncome
                    }
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Get data fail because missing data',
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    getAllCodeByTypeService, getAllProductByCategoryService, getAllStoreByCityService, getDetailProductByIdService, getDetailStoreByIdService,
    getBestSellerService, getStatisticsAppService
} 