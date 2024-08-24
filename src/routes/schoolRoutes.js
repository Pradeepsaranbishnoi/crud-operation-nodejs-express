const express = require('express');
const schoolController = require('../controllers/schoolController');

const router = express.Router();

router.post('/school-add', schoolController.createSchool);
router.get('/schools-list', schoolController.getAllSchools);
router.get('/school-detail', schoolController.getSchoolById);
router.put('/school-update', schoolController.updateSchool);
router.delete('/school-delete', schoolController.deleteSchool);

module.exports = router;