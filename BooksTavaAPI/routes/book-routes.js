const express = require("express");
const {
  getAllBook,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");

// create express router
const router = express.Router();

// all the routes that are related to only books only

// so you have to get the route and with , get controller and add them after comma
// get all books
router.get("/get" , getAllBook);
// get book by id
router.get("/get/:id" , getSingleBookById);
// add a new book
router.post("/add" , addNewBook);
// update a book with it
router.put("/update/:id" , updateBook);
// delete a book with id
router.delete("/delete/:id" , deleteBook);


// export these routers
module.exports = router;