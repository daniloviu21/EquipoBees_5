const express = require('express');
const VentasController = require('../controllers/ventasController');

const router = express.Router();

router.post('/ventas', VentasController.createSale);

module.exports = router;