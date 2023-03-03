const Author = require("../models/AuthorModel");

const GetAuthor = async (req, res) => {
    const {ExternValue} = "Ernest Hemingwway"
    try{
        const getAuthor = await Author.find({ nameAuthor: ExternValue }).exec();
        res.json(getAuthor);
    }
    catch(err){
        res.json({ message: "Autor no encontrado" })
    }

}

module.exports = {
    GetAuthor
}