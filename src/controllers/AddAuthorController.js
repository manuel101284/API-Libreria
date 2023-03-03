const Author = require("../models/AuthorModel");
const AuthorServices = require("../services/AuthorServices");

const AddAuthor = async (req,res) => {
    const { 
        nameAuthor,
        countryAuthor,
        yearBornAuthor
    } = req.body;

    const NewAuthor = new Author({
        nameAuthor: nameAuthor,
        countryAuthor: countryAuthor,
        yearBornAuthor: yearBornAuthor
    })

    NewAuthor.save();
    console.log("Autor registrado correctamente")
    res.send(NewAuthor)
}

module.exports = {
    AddAuthor
}