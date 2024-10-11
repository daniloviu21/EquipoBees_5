const express = require('express');
const UsuariosController = require('../controllers/usuariosController')

const router = express.Router();

router.get('/usuarios', UsuariosController.getAllUsers);
router.get('/usuarios/:id', UsuariosController.getUserById);
router.post('/usuarios', UsuariosController.createUser);
router.put('/usuarios/:id', UsuariosController.updateUser);
router.delete('/usuarios/:id', UsuariosController.deleteUser);

module.exports = router;