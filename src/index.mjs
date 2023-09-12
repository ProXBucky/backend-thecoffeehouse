import express from 'express'
import connectDB from "./config/connectDB.mjs"
import viewConfig from "./config/viewEngine.mjs"
import bodyParser from 'body-parser'
import initWebRoutes from './routes/route.cjs'
// import cors from "cors"
import cookieParser from 'cookie-parser'
import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv"
dotenv.config()
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

let app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT_PORT);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// // Serve static assets (e.g., CSS, JavaScript)
// app.use(express.static(path.join(__dirname, 'build')));
// // Handle all routes by serving the main index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join('build', 'index.html'));
// });

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