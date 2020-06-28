const sequelize = require('./util/database');
const express = require('express')
const app = express();
const userR = require("./routes/user");
const userMiddleware = require("./middlewares/user");

app.use(express.json());

app.use(userR);


app.listen(3000, (app) => {
    console.log('SERVER IS RUNNING!');
});


