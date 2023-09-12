import express from 'express'
import connectDB from "./config/connectDB.mjs"
import viewConfig from "./config/viewEngine.mjs"
import bodyParser from 'body-parser'
import initWebRoutes from './routes/route.cjs'
import cors from "cors"
import cookieParser from 'cookie-parser'
import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv"
dotenv.config()
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

let app = express()

app.use(cors({
    origin: process.env.REACT_PORT, // Đặt nguồn (origin) cụ thể mà bạn muốn cho phép
    methods: 'GET,POST,PUT,DELETE', // Các phương thức được phép
    allowedHeaders: 'authorization, Content-Type', // Các tiêu đề được phép
    credentials: true, // Cho phép gửi cookie và header xác thực
}));


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());


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