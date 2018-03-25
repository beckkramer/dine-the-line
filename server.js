const express = require('express');

const stations = require('./server/routes/api/stations');
const yelp = require('./server/routes/api/yelp');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/stations', stations);
app.use('/api/yelp', yelp);

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/client/dist'));

app.listen(port, () => console.log(`Listening on port ${port}`));