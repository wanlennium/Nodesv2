const jToken = require('jsonwebtoken');
const User = require("../models/user");

exports.authUser = (req, res, next) => {
    console.log(req.headers);
    const tokenHeader = req.headers.authorization;

    if (tokenHeader) {
        let token = tokenHeader.split(" ")[1];
        console.log(token);
        jToken.verify(token, "secret", (err, result) => {
          return User.findByPk(result.userId)
        })
        .then(user => {
            req.user = user;
            next()
        });
    } 
    else {
       res.sendStatus(401); 
    }
      
    // next();
};

