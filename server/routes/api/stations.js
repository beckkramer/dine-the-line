const express = require('express');
const router = express.Router();
const stations = require('../data/cta_stations.json');

/* GET stations listing. */
router.get('/all', function(request, response, next) {
  response.status(200).json(stations);
});

router.get('/:id', function(request, response, next) {
  const station = stations.find(station => {
    return station.stop_id === request.params.id
  })
  response.status(200).json(station);
});

module.exports = router;