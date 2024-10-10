const express = require('express');
const ClientesController = require('../controllers/clientesController');

const router = express.Router();

router.get('/clientes', ClientesController.getAllClients);
router.post('/clientes', ClientesController.createClient);
router.get('/clientes/:id', ClientesController.getClientById);
router.put('/clientes/:id', ClientesController.updateClient);
router.delete('/clientes/:id', ClientesController.deleteClientAndUser);

module.exports = router;
