const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');

/*
TODO: Add in for gender neutral restrooms (gender_neutral_restrooms) and currently open (open_now)
 */

router.get('/:location', function(req, res, next) {

  let latitude, longitude;

  const radius = 805; // half a mile
  const client = yelp.client(process.env.API_KEY);

  if (req.params.location) {
    let locationArray = req.params.location.split(',');
    latitude = locationArray[0];
    longitude = locationArray[1];
  }


  client.search({
      'categories':'restaurants',
      'latitude': latitude,
      'longitude': longitude,
      'radius': radius,
      'sort_by': 'distance',
    }).then(function(result){
      res.status(200).json(result);
    }).catch(function(error){
      console.log(error);
    });

});

module.exports = router;
