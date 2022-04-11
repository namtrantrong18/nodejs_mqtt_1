const express = require('express');
const router = express.Router();
const dashboardController = require('../app/controllers/DashboardController');
const { authJwt } = require('../middleware');

// Show dashboard interface for user role   
router.get('/data', [], dashboardController.getDataSelect);
//router.get('/data/:slug', [authJwt.verifyToken], dashboardController.getDataDetail);

router.get('/product', [], dashboardController.getProduct);
router.get('/knowledge', [], dashboardController.getKnowledge);
router.get('/team', [], dashboardController.getTeam);
router.get('/controller', [], dashboardController.getController);
router.post('/weather/show', dashboardController.getWeather);
//router.post('/product', dashboardController.getProduct);

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
router.post('/admin/resetquestion', dashboardController.resetQuestion);
router.post('/admin/resetDataSensor', dashboardController.resetDataSensor); // truncate tabel data_sensor in mysql 
module.exports = router;
