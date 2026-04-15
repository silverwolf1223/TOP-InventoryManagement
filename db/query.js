const Pool = require('./pools.js')

async function getAllInventory(){
    const { rows } = await Pool.query("SELECT * FROM inventory ORDER BY name");
    return rows;
}

async function insertinventory(name, stock, price, type) {
    await Pool.query("INSERT INTO inventory (name, stock, price, type) VALUES ($1, $2, $3, $4)", [name, stock, price, type]);
}

async function searchInventory(text){
    const { rows } = await Pool.query("SELECT * FROM inventory WHERE LOWER(name) LIKE '%' || LOWER($1) || '%' OR LOWER(type) LIKE '%' || LOWER($1) || '%' ORDER BY name", [text])
    return rows;
}

async function getById(id){
    const { rows } = await Pool.query("SELECT * FROM inventory WHERE id = $1", [id]);
    return rows[0];
}

async function alterById(name, stock, price, type, id) {
    await Pool.query("UPDATE inventory SET name=$1, stock=$2, price=$3, type=$4 WHERE id = $5", [name, stock, price, type, id])
}

async function deleteById(id){
    await Pool.query("DELETE FROM inventory WHERE id=$1", [id])
}

module.exports = {
    getAllInventory,
    insertinventory,
    searchInventory,
    getById,
    alterById,
    deleteById
}