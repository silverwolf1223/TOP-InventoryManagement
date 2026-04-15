const { Router } = require('express');
const editRouter = Router();
const editController = require('../controllers/editController.js')

editRouter.get('/edit', (req, res) => {
    res.send('<p>goob</p>')
})


module.exports = editRouter;