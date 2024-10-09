const express = require('express');
const MarcasController = require('../controllers/marcasController');

const router = express.Router();

router.get('/marcas', MarcasController.getAllBrands);
router.post('/marcas', MarcasController.createBrand);
router.put('/marcas/:id', MarcasController.updateBrand);
router.delete('/marcas/:id', MarcasController.deleteBrand);

module.exports = router;