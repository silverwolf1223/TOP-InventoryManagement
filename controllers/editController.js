const db = require('../db/query.js')

async function getEditForm(req, res) {
    const item = await db.getById(req.params.id);
    res.render("edit", {item: item});
}

async function postEditForm(req, res) {
    item = req.body
    await db.alterById(item.name, item.stock, item.price, item.type, req.params.id)
    res.redirect("/")
}

async function deleteItem(req, res){
    await db.deleteById(req.params.id);
    res.redirect('/');
}

module.exports = {
    getEditForm,
    postEditForm,
    deleteItem
}