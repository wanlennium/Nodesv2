const express = require("express");

const router = express.Router();

const userController = require("../controller/user");

const userMiddleware = require("../middlewares/user")


router.route("/register").post(userController.userReg);

router.route("/users-details").get( userMiddleware.authUser ,userController.usersDetail);

router.route("/my-profile").get( userMiddleware.authUser ,userController.userProfile);


router.route("/login").post(userController.login);





module.exports = router;
