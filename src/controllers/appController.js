const appService = require("../services/appService.js")

let getAllCodeByType = async (req, res) => {
    try {
        let response = await appService.getAllCodeByTypeService(req.query.type)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(404).json({
            errCode: -1,
            errMessage: "Error from server"
        })
    }
}

module.exports = { getAllCodeByType }