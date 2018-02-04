const express = require('express');
const router = express.Router();
const Yelp = require('node-yelp-fusion');

/*
TODO: Add in for gender neutral restrooms (gender_neutral_restrooms) and currently open (open_now)
 */

router.get('/:location/:radius', function(req, res, next) {

  let latitude, longitude;

  let radius = req.params.radius; // 805 = half a mile
  let yelp = new Yelp({
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  });

  if (req.params.location) {
    let locationArray = req.params.location.split(',');
    latitude = locationArray[0];
    longitude = locationArray[1];
  }


  yelp.search("sort_by=distance&limit=50&categories=restaurants&radius=" + radius + "&longitude=" + longitude + "&latitude=" + latitude)
    .then(function(result){
      res.status(200).json(result);
    }).catch(function(error){
      console.log(error);
    });

});

module.exports = router;
