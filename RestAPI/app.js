const express = require('express')
const app = express();


// middle ware ->express.json
app.use(express.json())

let books = [
    {
        id: "1",
        title: "book-1",
    },
    {
        id: "2",
        title: "book-2",
    },
    {
        id: "3",
        title: "book-3",
    },
];


// get routes for getting all books
app.get('/', (req, res) => {
    res.json({
        message:"welcome to our book store api"
    })
})

// get all books 
app.get('/get', (req, res) => {
    res.json(books)
    
})

// get a single book
app.get('/get/:id', (req, res) => {
    const book = books.find(item => item.id === req.params.id);
    if (book) {
        res.status(200).json(book)

    }
    else {
        res.status(404).json({
            message:"book not found"
        })
    }
})

// creating a new book post
app.post('/add', (req, res) => {
    const newbook = {
      id: books.length + 1,
      title: `book ${books.length + 1}`,
    };
    books.push(newbook)
    res.status(200).json({
        data: newbook,
        message:"new book added successfully"
    })
})

// updating  a book content based on a perticular id
app.put('/update/:id', (req, res) => {
    const findcurrentBook = books.find(bookItem => String(bookItem.id) === req.params.id);

    if (findcurrentBook) {
        // Ensure `req.body` exists before accessing `title`
        if (req.body && req.body.title) {
            findcurrentBook.title = req.body.title;
        }

        res.status(200).json({
            message: `Book updated with ID ${req.params.id}`,
            data: findcurrentBook
        });
    } else {
        res.status(404).json({
            message: "Book not found"
        });
    }
});


// deleting any book
app.delete('/delete/:id', (req, res) => {
    const findindexofcurrentbook = books.findIndex(items => items.id === req.params.id)
    if (findindexofcurrentbook !== -1) {
        const deletedbook = books.splice(findindexofcurrentbook, 1);
        res.status(200).json({
            message: 'book deleted successfully',
            data:deletedbook[0]
        })
    }
    else {
        res.status(404).json({
            message:"book not found"
        })
    }
    
})
// starting the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is now running on post ${PORT}`)
})