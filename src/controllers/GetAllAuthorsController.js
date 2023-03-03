const Author = require("../models/AuthorModel");

//Get all person registered in the database
const GetAllAuthors = (req, res) => {
    Author.find((err, result) => {
        if (err) throw new Error(err);
        res.json(result);
        console.log(result);
    });
};

module.exports = {
   GetAllAuthors
}