const express = require('express');
const { getWeatherData } = require('../controllers/weather.controller.js');

const router = express.Router();

router.get('/', getWeatherData);

module.exports = router;
