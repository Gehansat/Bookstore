const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/usercontroller")

router.get("/", usercontroller.getUsers);
router.post("/",usercontroller.addUsers);
router.put("/:id",usercontroller.updateUser);
router.delete("/:id",usercontroller.deleteUser);

module.exports = router;