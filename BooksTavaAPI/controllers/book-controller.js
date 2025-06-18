// get your db model here
const Book = require('../models/Book')
const mongoose = require('mongoose')

const getAllBook = async (req, res) => {
    try {
        // get find the books
        const allBooks = await Book.find({});
        if (allBooks?.length > 0) {
            res.status(200).json({
                success: true,
                message: "fetched",
                data:allBooks
            })


        }
        else {
            res.status(404).json({
                success: false,
                message: "no books founded", })
        }
        
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message:"Something went wrong!"
        })
        
    }
    
}

const getSingleBookById = async (req, res) => {
  try {
    const { id } = req.params; // Get id from URL parameters

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Book ID format",
      });
    }

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


const addNewBook = async (req, res) => {
    // u will be having a frontent and having a form then u will be getting from body save on db 
    try {
        
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if (newlyCreatedBook) {
            res.status(201).json({
                success: true,
                message: 'Book added',
                data : newlyCreatedBook
            })
        }
    }
    catch (e) {

        console.log(e);
        res.status(500).json({
          success: false,
          message: "Something went wrong!",
        });
        
        
    }

 };


const updateBook = async (req, res) => { 
    try {

        const updatedformData = req.body;
        const getCurrentBookID = req.params.id;
        const updatedBook = await Book.findOneAndUpdate(
          { _id: getCurrentBookID },
          req.body,
          { new: true, runValidators: true } // Ensure validations run on update
        );
        // new true gives ur updated data back
     
        if (!updatedBook) {
          res.status(404).json({
            success: false,
            message: "book not found",
          });
        }
        else {
            res.status(200).json({
                successs: true,
                message: "updated book successfully",
                data:updatedBook
            })
        }


    }
    catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
      });
    }

};



const deleteBook = async (req, res) => {
    try {
        const getCurrentID = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(getCurrentID)
        
        if (!deleteBook) {
            res.status(404).json({
                success: false,
                message:'book not found'
            })
            
        }
        else {
            res.status(200).json({
                success: true,
                message: 'book deleted ',
                data:deleteBook
            })
        }

    }
    
    catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
      });
    }
 };

module.exports =
{
    getAllBook,
    getSingleBookById,
    addNewBook,
    updateBook,
    deleteBook
}