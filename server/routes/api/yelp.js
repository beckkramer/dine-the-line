const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');

/*
TODO: Add in for gender neutral restrooms (gender_neutral_restrooms) and currently open (open_now)
 */

router.get('/:location/:filters', function(req, res, next) {

  let latitude, longitude;

  const client = yelp.client(process.env.API_KEY);
  const radius = 805; // half a mile
  let filterParams;

  if (req.params.location) {
    let locationArray = req.params.location.split(',');
    latitude = locationArray[0];
    longitude = locationArray[1];
  }

  if (req.params.filters) {
    filterParams = req.query;
  }


  client.search({
      'categories':'restaurants',
      'latitude': latitude,
      'longitude': longitude,
      'radius': radius,
      'price': filterParams.price ? filterParams.price : '1,2,3,4',
      'sort_by': filterParams.sort_by ? filterParams.sort_by : 'distance',
    }).then(function(result){
      res.status(200).json(result);
    }).catch(function(error){
      console.log(error);
    });

});

module.exports = router;
