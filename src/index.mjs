import express from 'express'
import connectDB from "./config/connectDB.mjs"
import viewConfig from "./config/viewEngine.mjs"
import bodyParser from 'body-parser'
import dotenv from "dotenv"
import initWebRoutes from './routes/route.cjs'
dotenv.config()


let app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
initWebRoutes(app)
viewConfig(app)
connectDB()



let port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Backend is running in port http://localhost:${port}`)
})