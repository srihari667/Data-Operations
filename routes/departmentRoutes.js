const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

router.post('/', departmentController.createDepartment);
router.put('/:id', departmentController.updateDepartment);

module.exports = router;
