

let getHome = (req, res) => {
    res.send('Hello world')
}

let getPage = (req, res) => {
    res.send('Hello Page')
}

module.exports = { getHome, getPage }