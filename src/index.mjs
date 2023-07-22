import express from 'express'
import connectDB from "./config/connectDB.mjs"
import viewConfig from "./config/viewEngine.mjs"
import bodyParser from 'body-parser'
import dotenv from "dotenv"
import initWebRoutes from './routes/route.cjs'
import livereload from "livereload"
import connectLiveReload from "connect-livereload"
import cors from "cors"
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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(cors())


initWebRoutes(app)
viewConfig(app)
connectDB()



let port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Backend is running in port http://localhost:${port}`)
})