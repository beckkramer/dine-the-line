const express = require('express');
const router = express.Router();
const stations = require('../data/cta_stations.json');

/* GET stations listing. */
router.get('/', function(request, response, next) {
  response.status(200).json(stations);
});

module.exports = router;