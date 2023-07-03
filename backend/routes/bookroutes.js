const express = require("express");
const router = express.Router();
// const Book = require("../model/Book");
const booksController = require("../controller/bookscontroller");


router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookByID);
router.post("/", booksController.addBooks);
router.put("/:id",booksController.updateBooks);
router.delete("/:id", booksController.deleteBookById);

module.exports = router;
