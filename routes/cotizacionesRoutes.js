const express = require('express');
const CotizacionesController = require('../controllers/cotizacionesController');

const router = express.Router();

router.get('/cotizaciones', CotizacionesController.getAllQuotes);
router.post('/cotizaciones', CotizacionesController.create);
router.put('/cotizaciones/:id', CotizacionesController.update);
router.delete('/cotizaciones/:id', CotizacionesController.delete);

module.exports = router;
