const Book = require("../model/Book");

const getAllBooks = async(req,res,next) => {
    let books;
    try{
        books = await Book.find();
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({ hi:"No products found" });
    }
    return res.status(200).json({books});
}

const getBookByID = async (req,res,next) => {
    let books;
    const id = req.params.id;
    try{
        books = await Book.findById(id);
    }
    catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({ message : "No product found by that ID "});
    }
    return res.status(200).json({books})
}

const addBooks = async(req,res,next) =>{
    const {name,author,description,price,available} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
        });
        await book.save();
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(500).json({message:"Error adding the project"});
    }
    return res.status(201).json({book})
}

const updateBooks = async(req,res,next) =>{
    const id = req.params.id;
    const { name ,author,description,price,available } = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            description,
            author,
            price,
            available
        });
        book = await book.save();
      }catch(err){
        console.log(err);
      }
      if(!book){
        return res.status(404).json({message:"Error updating the data"});
    }
    return res.status(201).json({book})
}

const deleteBookById = async (req,res,next)=>{
    const id = req.params.id;
    let books;
    try{
        books = await Book.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({ message : "Cannot delete"});
    }return res.json({message : "Successfully Deleted"});
}


exports.getAllBooks = getAllBooks;
exports.getBookByID = getBookByID;
exports.addBooks = addBooks;
exports.updateBooks = updateBooks;
exports.deleteBookById = deleteBookById;