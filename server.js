const express = require('express');

const stations = require('./server/routes/api/stations');
const yelp = require('./server/routes/api/yelp');

const app = express();
const port = process.env.PORT || 5000;

// Run the app by serving the static files
// in the dist directory

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS

// const forceSSL = function() {
//     return function (req, res, next) {
//         if (req.headers['x-forwarded-proto'] !== 'https') {
//             return res.redirect(
//                 ['https://', req.get('Host'), req.url].join('')
//             );
//         }
//         next();
//     }
// }
  
// Instruct the app
// to use the forceSSL
// middleware
  
// app.use(forceSSL());

app.use('/api/stations', stations);
app.use('/api/yelp', yelp);

// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/client/dist'));

app.listen(port, () => console.log(`Listening on port ${port}`));