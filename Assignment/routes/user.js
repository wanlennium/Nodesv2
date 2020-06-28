const express = require("express");

const router = express.Router();

const userController = require("../controller/user");

const userMiddleware = require("../middlewares/user")


router.route("/register").post(userController.userReg);

router.route("/all-users").get( userMiddleware.authUser ,userController.allUser);

router.route("/user/:userId").get( userMiddleware.authUser ,userController.userProfile);

router.route("/my-profile").get( userMiddleware.authUser ,userController.myProfile);

router.route("/delete-user/:userId").delete( userMiddleware.authUser ,userController.deleteUser);


router.route("/login").post(userController.login);





module.exports = router;
