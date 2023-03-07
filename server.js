

const express = require('express');
const path = require('path');
const fs = require('fs');
let allNotes = [];

const apiRoutes = require('./routes/apiRouts');


const htmlRoutes = require('./routes/htmlRoutes');
const { application } = require('express');


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("super-duper application on port 5000"))

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
