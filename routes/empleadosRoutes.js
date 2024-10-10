const express = require('express');
const EmpleadosController = require('../controllers/empleadosController');

const router = express.Router();

router.get('/empleados', EmpleadosController.getAllEmployees);
router.post('/empleados', EmpleadosController.createEmployee);
router.get('/empleados/:id', EmpleadosController.getEmployeeById);
router.put('/empleados/:id', EmpleadosController.updateEmployee);
router.delete('/empleados/:id', EmpleadosController.deleteEmployeeAndUser);

module.exports = router;
