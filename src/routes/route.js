import express from 'express'
const router = express.Router()

const initRoutes = (app) => {

    router.get('/about', (req, res) => {
        res.send('CCCCCCCCCCCC')
    })


    app.use("/", router)
}

export default initRoutes