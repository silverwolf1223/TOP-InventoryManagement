const db = require('../db/query.js')

async function getList(req, res) {
    let inv;
    if(req.query.search != undefined) {inv = await(db.searchInventory(req.query.search))}
    else {inv = await db.getAllInventory()};
    res.render("index", {rows: inv})
}

async function getNewInventory(req, res) {
    res.render("add")
}

async function postNewInventory(req, res) {
    item = req.body;
    db.insertinventory(item.name, item.stock, item.price, item.type);
    res.redirect("/")
}

module.exports = {
    getList,
    getNewInventory,
    postNewInventory
}