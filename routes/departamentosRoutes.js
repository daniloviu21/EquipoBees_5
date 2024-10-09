const express = require('express');
const DepartamentosController = require('../controllers/departamentosController');

const router = express.Router();

router.get('/departamentos', DepartamentosController.getAllDepartments);
router.post('/departamentos', DepartamentosController.createDepartment);
router.put('/departamentos/:id', DepartamentosController.updateDepartment);
router.delete('/departamentos/:id', DepartamentosController.deleteDepartment);

module.exports = router;