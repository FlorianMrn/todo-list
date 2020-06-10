// Import
const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.PORT || 3000;
app.use(bodyParser.json());
const db = require('./models/index');

// Server
app.listen(PORT, (req, res) => {
    console.log(`Listenning on ${PORT}`);
});
