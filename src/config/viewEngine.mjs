import express from "express";

let viewConfig = (app) => {
    app.use(express.static('public'))
    app.set('views', './src/views');
    app.set('view engine', 'ejs');
}

export default viewConfig