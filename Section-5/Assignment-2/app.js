const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First Middleware');

//     next();

// });

// app.use((req, res, next) => {
//     console.log('Second Middleware');
//     res.send('<p>Half way there</p>');

// });

app.use('/users', (req, res, next) => {
    console.log('/users middleware execute');
    res.send('<p> Middleware that execute the /users </p>');
});


app.use('/', (req, res, next) => {
    console.log('/ middleware execute');
    res.send('<p> Middleware that execute the / </p>');
});




app.listen(3000);