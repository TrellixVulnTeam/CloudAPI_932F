const express = require('express');
const routes = require('./routes/Cloud');
const firebase = require('firebase');
const firebaseui = require('firebaseui');
const port = 3000
const app = express();
app.use(express.json());
app.use('/', routes);
app.listen(port, () => console.log(`Running the best code on port: ${port}.`));