const path = require('path');

const express = require('express');

const primaryRoutes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.use(primaryRoutes);


app.listen(3000);