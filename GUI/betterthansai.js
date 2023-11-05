const http = require('http');
const fs = require("fs"); 
const express = require('express');

const app = express();

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
  console.log(req.body); // Log the request body
  var newData2 = JSON.stringify(req.body);
  fs.writeFileSync("data2.json", newData2);
  console.log("New data added");
  res.json({message: 'Data received!'}); // Send a response
});

app.listen(3000, () => console.log('Server started on port 3000'));
