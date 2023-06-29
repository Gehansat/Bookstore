const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controller/bookscontroller");


router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBooks);

module.exports = router;
