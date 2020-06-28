const bcrypt = require("bcrypt");
const User = require("../models/user");
const jToken = require("jsonwebtoken");



exports.allUser = (req, res, next) => {
    User.findAll({ attributes: {exclude: ["password",] }})
    .then((users) => {
        res.send(users);
    })
    .catch(err => console.log(err));
};

exports.userProfile = (req, res, next) => {
    const userId  = req.params.userId;
    User.findByPk(userId ,  { attributes: {exclude: ["password",] }})
    .then((user) => {
        res.send(user);
    })
    .catch(err => console.log(err));
};

exports.myProfile = (req, res, next) => {
    const user = req.user;
    res.send(user);
};

exports.deleteUser = (req, res, next) => {};



exports.userReg = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt
    .hash(password,12)
    .then((hashPassword) => {
        return User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashPassword,
        });
    })
    .then(user => {
        res.send(user);
    })
    .catch(err => console.log(err));
};

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let resultUser;
    User.findOne({where: {email: email}})
    .then(user => {
        resultUser = user;
    return bcrypt.compare(password, user.password);
       
    })
    .then((match) => {
        if (match) {
            const userInfo = {
                userId: resultUser.id,
            };
            const token = jToken.sign(userInfo, "secret");
            res.send({ Token: token});
            console.log('PASSWORD MATCH TOKEN INITIALIZE');
        }
        else {
            console.log('PASSWORD NOT MATCH!');
        }
    })
    .catch(err => console.log(err));
};