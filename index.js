import express from 'express'
import initRoutes from "./src/routes/route.js"
import connectDB from "./src/config/connectDB.js"
import viewConfig from "./src/config/viewEngine.js"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

let app = express()
initRoutes(app)
viewConfig(app)
connectDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




const user = {
    firstName: 'Tim',
    lastName: 'Cook',
}

app.get('/', (req, res) => {
    res.render('pages.ejs', {
        user: user
    })
})

let port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Backend is running in port http://localhost:${port}`)
})