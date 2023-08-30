import express from 'express'
import connectDB from "./config/connectDB.mjs"
import viewConfig from "./config/viewEngine.mjs"
import bodyParser from 'body-parser'
import dotenv from "dotenv"
import initWebRoutes from './routes/route.cjs'
import livereload from "livereload"
import connectLiveReload from "connect-livereload"
import cors from "cors"
import cookieParser from 'cookie-parser'
import { v2 as cloudinary } from 'cloudinary';
dotenv.config()


//auto load server when optimize
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

let app = express()
const env = process.env.NODE_ENV || "development";
if (env === "development") {
    app.use(connectLiveReload());
}


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 100000, }));
app.use(cookieParser());
app.use(cors())



// Cấu hình kết nối Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// Kết nối Routes
initWebRoutes(app)
viewConfig(app)

//Kết nối database
connectDB()


let port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Backend is running in port http://localhost:${port}`)
})