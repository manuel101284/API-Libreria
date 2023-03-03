const Author = require("../models/AuthorModel");
const AuthorServices = require("../services/AuthorServices");
const Book = require("../models/BookModel");

const AddBook = async (req,res) => {
    const { 
        nameAuthor,
        titleBook,
        yearBook,
        pagesBook
    } = req.body

    const NewBook = new Book({
        titleBook: titleBook,
        yearBook: yearBook,
        pagesBook: pagesBook,
        authorIdBook: _id.where({ nameAuthor })
    })

    NewBook.save();
    console.log("Libro registrado correctamente")
    res.send(NewBook)
}

module.exports = {
    AddBook
}
