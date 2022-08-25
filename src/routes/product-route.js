const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

//método para recuperar informações
router.get('/', controller.get);
//método para postar informações
router.post('/', controller.post);
//método para alterar informações
router.put('/:id', controller.put);

router.get('/:id', controller.getById);
//método para deletar informações
router.delete('/:id', controller.delete);

module.exports = router;