const express = require('express');
const RolesController = require('../controllers/rolesController');

const router = express.Router();

router.get('/roles', RolesController.getAllRoles);
router.post('/roles', RolesController.createRol);
router.put('/roles/:id', RolesController.updateRol);
router.delete('/roles/:id', RolesController.deleteRol);

module.exports = router;