const db = require("../models/index.js")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cloudinary = require('cloudinary').v2;



const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

let getAllAdminService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allAdmin = await db.Users.findAll({
                where: { roleId: ['R1', 'R2'], isApproved: 1 },
                order: [
                    ['roleId', 'ASC'],
                ],
                include: [
                    { model: db.Allcodes, as: 'roleData', attributes: ['valueEn', 'valueVn'] }
                ],
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
                where: { roleId: 'R2', isApproved: 0 }
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
                admin.isApproved = 1
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
            const maxId = await db.Products.max('id'); // Tìm ID lớn nhất trong bảng Users
            const newId = (maxId !== null) ? maxId + 1 : 1; // Tính toán ID mới
            if (!body) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter'
                })
            }
            const cloudinaryUpload = await cloudinary.uploader.upload(body.image, { folder: 'uploads_product' });
            const imageUrl = cloudinaryUpload.secure_url;
            const cloudinaryId = cloudinaryUpload.public_id;

            // Lưu đường dẫn va cloudID vào cơ sở dữ liệu bằng Sequelize
            await db.Products.create({
                id: newId,
                name: body.name,
                originalPrice: body.originalPrice,
                category: body.category,
                image: imageUrl,
                description: body.description,
                quantitySold: 0,
                cloudId: cloudinaryId
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
            const productDeleted = await db.Products.findOne({
                where: { id: id }
            });
            if (productDeleted) {
                const publicId = productDeleted.cloudId;
                // // Xóa ảnh từ Cloudinary bằng public_id
                const res = await cloudinary.uploader.destroy(publicId);
                if (res.result === 'ok') {
                    await productDeleted.destroy();
                    resolve({
                        errCode: 0,
                        errMessage: 'Delete product success',
                    })
                } else {
                    resolve({
                        errCode: 1,
                        errMessage: 'Delete product fail',
                    })
                }
            } else {
                resolve({
                    errCode: 2,
                    errMessage: 'Dont find product in database'
                })
            }
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
                productUpdate.originalPrice = body.originalPrice
                const publicId = productUpdate.cloudId;
                // Xóa image cũ
                const res = await cloudinary.uploader.destroy(publicId);
                if (res.result === 'ok') {
                    // Cập nhật image mới
                    const cloudinaryUpload = await cloudinary.uploader.upload(body.image, { folder: 'uploads_product' });
                    const imageUrl = cloudinaryUpload.secure_url;
                    const cloudinaryId = cloudinaryUpload.public_id;
                    productUpdate.image = imageUrl
                    productUpdate.cloudId = cloudinaryId
                    await productUpdate.save();
                    resolve({
                        errCode: 0,
                        errMessage: "Update data success"
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'Update product fail',
                    })
                }

            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Product not found'
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
            const maxId = await db.Stores.max('id'); // Tìm ID lớn nhất trong bảng Users
            const newId = (maxId !== null) ? maxId + 1 : 1; // Tính toán ID mới
            const store = await db.Stores.create({
                id: newId,
                nameStore: body.nameStore,
                address: body.address,
                description: body.description,
                cityId: body.cityId,
                shortDescription: body.shortDescription,
                mapLink: body.mapLink,
                mapHTML: body.mapHTML,
            })
            if (store) {
                const newArray = []
                const imageDatas = [...body.image] // Mảng dữ liệu Base64 của các ảnh
                const promises = imageDatas.map(async (imageData) => {
                    const cloudinaryUpload = await cloudinary.uploader.upload(imageData.base64Image, { folder: 'uploads_store' });
                    const imageUrl = cloudinaryUpload.secure_url;
                    const cloudinaryId = cloudinaryUpload.public_id;
                    imageData = { ...imageData }
                    newArray.push({
                        storeId: store.id,
                        image: imageUrl,
                        cloudId: cloudinaryId
                    })
                })
                await Promise.all(promises);  // Wait process 
                await db.ImageStore.bulkCreate(newArray)
                resolve({
                    errCode: 0,
                    errMessage: "Create store success",
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Create store but create image fail"
                })
            }
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
            const storeDeleted = await db.ImageStore.findAll({
                where: { storeId: id }
            })
            if (storeDeleted.length > 0) {
                // Xóa nhiều ảnh từ Cloudinary bằng danh sách public_id
                const deleteResults = await Promise.all(
                    storeDeleted.map(async store => {
                        public_id = store.cloudId
                        const result = await cloudinary.uploader.destroy(public_id);
                        return { public_id, result };
                    })
                );
                const successfullyDeleted = deleteResults.filter(result => result.result === 'ok');
                const failedToDelete = deleteResults.filter(result => result.result !== 'ok');

                await db.ImageStore.destroy({
                    where: { storeId: id }
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Delete product success',
                    successfullyDeleted,
                    failedToDelete
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Delete product fail',
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let updateStoreDataService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const storeDeleted = await db.ImageStore.findAll({
                where: { storeId: body.id }
            })
            if (storeDeleted.length > 0) {
                // Xóa nhiều ảnh từ Cloudinary bằng danh sách public_id
                const deleteResults = await Promise.all(
                    storeDeleted.map(async store => {
                        public_id = store.cloudId
                        const result = await cloudinary.uploader.destroy(public_id);
                        return { public_id, result };
                    })
                );
                const successfullyDeleted = deleteResults.filter(result => result.result === 'ok');
                const failedToDelete = deleteResults.filter(result => result.result !== 'ok');

                await db.ImageStore.destroy({
                    where: { storeId: body.id }
                })
                const storeUpdate = await db.Stores.findOne({
                    where: { id: body.id }
                })

                // Update các dữ liệu khác
                if (storeUpdate) {
                    storeUpdate.nameStore = body.nameStore
                    storeUpdate.address = body.address
                    storeUpdate.cityId = body.cityId
                    storeUpdate.description = body.description
                    storeUpdate.shortDescription = body.shortDescription
                    storeUpdate.mapLink = body.mapLink
                    storeUpdate.mapHTML = body.mapHTML
                    await storeUpdate.save();

                    // Đẩy nhiều ảnh mới lên Cloud
                    const newArray = []
                    const imageDatas = [...body.image] // Mảng dữ liệu Base64 của các ảnh
                    const promises = imageDatas.map(async (imageData) => {
                        const cloudinaryUpload = await cloudinary.uploader.upload(imageData.base64Image, { folder: 'uploads_store' });
                        const imageUrl = cloudinaryUpload.secure_url;
                        const cloudinaryId = cloudinaryUpload.public_id;
                        imageData = { ...imageData }
                        newArray.push({
                            storeId: storeUpdate.id,
                            image: imageUrl,
                            cloudId: cloudinaryId
                        })
                    })
                    await Promise.all(promises);  // Wait process 
                    await db.ImageStore.bulkCreate(newArray)
                    resolve({
                        errCode: 0,
                        errMessage: 'Update store success',
                        successfullyDeleted,
                        failedToDelete
                    })
                }
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Store not found'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
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

let createNewManagerService = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const maxId = await db.Users.max('id'); // Tìm ID lớn nhất trong bảng Users
            const newId = (maxId !== null) ? maxId + 1 : 1; // Tính toán ID mới
            if (await checkEmailExist(body.email)) {
                resolve({
                    errCode: 1,
                    errMessage: 'Tài khoản đã tồn tại, vui lòng nhập email khác'
                })
            } else {
                await db.Users.create({
                    id: newId,
                    email: body.email,
                    password: hashPassword(body.password),
                    firstName: body.firstName,
                    lastName: body.lastName,
                    address: body.address,
                    roleId: 'R1', // role manager
                    phone: body.phone,
                    isApproved: 1
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Create new manager success'
                })
            }
        } catch (e) {
            console.log(e)
            reject(e);
        }
    })
}


module.exports = {
    getAllAdminService, getAdminByIdService, deleteAdminService, updateAdminDataService, getAdminByEmailService, createNewProductSevice,
    deleteProductService, updateProductDataService, createNewStoreService, updateStoreDataService, deleteStoreService,
    approveAdminByIdService, getAllAdminNotApprovedService, createNewManagerService
}

// uploadMultiImageService