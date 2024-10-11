const express = require('express');
const ServiciosController = require('../controllers/serviciosController');

const router = express.Router();

router.get('/services', ServiciosController.getAllServices);
router.post('/services', ServiciosController.createService);
router.put('/services/:id', ServiciosController.updateService);
router.delete('/services/:id', ServiciosController.deleteService);

module.exports = router;