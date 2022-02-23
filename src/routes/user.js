var express = require('express');
var userController= require('../controllers/UserController');
var router= express.Router();

router.get('/create',userController.create);
router.post('/store',userController.store);
router.get('/index',userController.index);
router.get('/edit/:id',userController.edit);
router.post('/update/:id',userController.update);
router.get('/delete/:id',userController.delete);

module.exports = router;