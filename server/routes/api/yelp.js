const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');

/*
TODO: Add in for gender neutral restrooms (gender_neutral_restrooms) and currently open (open_now)
 */

router.get('/:location/:filters', function(req, res, next) {

  let latitude, longitude;

  const attributes = [];
  const client = yelp.client(process.env.API_KEY);
  const radius = 805; // half a mile
  let searchParams = {
    'categories':'restaurants',
    'radius': radius,
    'price': '1,2,3,4',
    'sort_by': 'distance',
  };

  console.log(req.params.filters)

  if (req.params.location) {
    let locationArray = req.params.location.split(',');
    latitude = locationArray[0];
    longitude = locationArray[1];
    searchParams.latitude = latitude;
    searchParams.longitude = longitude;
  }

  if (req.params.filters) {

    searchParams.open_now = req.query.open_now ? req.query.open_now : false;
    searchParams.price = req.query.price ? req.query.price : '1,2,3,4';
    searchParams.sort_by =  req.query.sort_by ? req.query.sort_by : 'distance';

    if (req.query.gender_neutral_restrooms) {
      attributes.push('gender_neutral_restrooms');
    }

    if (req.query.wheelchair_accessible) {
      attributes.push('wheelchair_accessible');
    }
    if (req.query.open_to_all) {
      attributes.push('open_to_all');
    }

    searchParams.attributes = attributes.join(',')
  }

  client.search(searchParams).then(function(result){
    res.status(200).json(result);
  }).catch(function(error){
    console.log(error);
  });

});

module.exports = router;
