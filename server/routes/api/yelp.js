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
    'price': null,
    'sort_by': 'distance',
  };

  if (req.params.location) {
    let locationArray = req.params.location.split(',');
    latitude = locationArray[0];
    longitude = locationArray[1];
    searchParams.latitude = latitude;
    searchParams.longitude = longitude;
  }

  if (req.params.filters) {

    searchParams.open_now = req.query.open_now ? req.query.open_now : false;
    searchParams.sort_by =  req.query.sort_by ? req.query.sort_by : 'distance';

    if (req.query.gender_neutral_restrooms) {
      attributes.push('gender_neutral_restrooms');
    }

    if (req.query.wheelchair_accessible) {
      attributes.push('wheelchair_accessible');
    }

    searchParams.attributes = attributes.join(',')

    if (searchParams.price) {

      // Only filter if less than everything is chosen, so that
      // 'N/A' results show up as well.
      if (searchParams.price !== '1,2,3,4') {
        searchParams.price = req.query.price;
      }
    }
  }


  client.search(searchParams).then(function(result){
    res.status(200).json(result);
  }).catch(function(error){
    console.log(error);
  });

});

module.exports = router;
