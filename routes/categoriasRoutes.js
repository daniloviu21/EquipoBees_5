const express = require('express');
const CategoriasController = require('../controllers/categoriasController');

const router = express.Router();

router.get('/categorias', CategoriasController.getAllCategories);
router.post('/categorias', CategoriasController.createCategorie);
router.put('/categorias/:id', CategoriasController.updateCategorie);
router.delete('/categorias/:id', CategoriasController.deleteCategorie);

module.exports = router;