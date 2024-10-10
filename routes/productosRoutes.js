const express = require('express');
const ProductosController = require('../controllers/productosController');

const router = express.Router();

router.get('/products', ProductosController.getAllProducts);
router.get('/products/:id', ProductosController.getProductById);
router.post('/products', ProductosController.createProduct);
router.put('/products/:id', ProductosController.updateProduct);
router.delete('/products/:id', ProductosController.deleteProduct);

module.exports = router;