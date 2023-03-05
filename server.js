

const express = require('express');
const path = require('path');
const fs = require('fs');
let allNotes = [];

const apiRoutes = require('./routes/apiRouts');


const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.port || 3001;

const app = express();


// Import custom middleware, "cLog"


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Sets up the use of the "public folder"
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//Allows for the listening for the PORT for the API server.
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
