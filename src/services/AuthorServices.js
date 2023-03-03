const Author = require("../models/AuthorModel");

const addAuthor = () => {
    const agregateAuthor = Author.AddAuthor();
    return agregateAuthor;
}

module.exports = {
    addAuthor
}