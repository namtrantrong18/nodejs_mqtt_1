const express = require('express');
const router = express.Router();
const dashboardController = require('../app/controllers/DashboardController');
const { authJwt } = require('../middleware');

// Show quiz interface for user role
router.get('/', [authJwt.verifyToken], dashboardController.getDashboard);
router.get('/showquiz', [authJwt.verifyToken], dashboardController.showQuiz);
router.post('/saveAnswer', dashboardController.saveAnswer);
router.post('/submitAnswer', dashboardController.submitAnswer);

// router for admin role
router.get(
    '/admin/quiz',
    [authJwt.verifyToken, authJwt.isAdmin],
    dashboardController.show_admindashBoard,
);

router.post('/admin/createquestion', dashboardController.createQuestion);
module.exports = router;