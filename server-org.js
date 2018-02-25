const express = require('express');

const stations = require('./server/routes/api/stations');
const yelp = require('./server/routes/api/yelp');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/stations', stations);
app.use('/api/yelp', yelp);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));