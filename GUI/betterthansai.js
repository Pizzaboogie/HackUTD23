const http = require('http');
const fs = require("fs"); 
const express = require('express');
const cors = require('cors'); // Don't forget to install the 'cors' package with npm

const app = express();
app.use(cors()); 
app.use(express.static('public'));
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/valuesJson', (req, res) => {
   // Log the request body
  var newData2 = JSON.stringify(req.body);
  fs.writeFileSync("data2.json", newData2);
  res.json({message: 'Data received!'}); // Send a response
});



app.get('/getJSON', (req, res) => {
  fs.readFile('\GUI\\output.json', 'utf8', (err, data) => {
      if (err) {
          console.error(err);
          return res.status(500).send(err);
      }
      res.send(JSON.parse(data));
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
