const express = require("express");

const router = express.Router();
const userController = require("../controller/user");

//Create - POST
router.post("/", userController.createUser);

//Read - GET
router.get("/", userController.getUser);

//Update - PATCH
router.patch("/:id", userController.updateUser);

//Delete - DELETE
router.delete("/:id", userController.deleteUser);

module.exports = router;
