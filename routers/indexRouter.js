const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController.js')
const editController = require('../controllers/editController.js')

indexRouter.get('/', indexController.getList)

indexRouter.get('/new', indexController.getNewInventory)

indexRouter.post('/new', indexController.postNewInventory)

indexRouter.post('/edit/:id/delete', editController.deleteItem)

indexRouter.get('/edit/:id', editController.getEditForm)

indexRouter.post('/edit/:id', editController.postEditForm)


module.exports = indexRouter;