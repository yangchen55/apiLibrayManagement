import express from "express";

const router = express.Router();
import {deleteManybooks, getAllBooks, insertBook} from "../models/books/BookModel.js"

router.get("/", async(req, res, next)  => {
    try {
        const {authorization} = req.headers;
        const books = await getAllBooks({userId: authorization});
        res.json({
            status: "success",
            message : "listed suceessfully",
            books,
          
        });
        
        
    } catch (error) {
        next(error) 
         
    }
})

router.post("/", async(req, res, next)  => {

    try{
        const {authorization} = req.headers;
        const book1 = await insertBook({...req.body, userId: authorization});
        // res.redirect()
        if(book1?._id){
            res.json({
                status: "success",
                message : "book added suceessfully",
                // book1:{
                //     name: book.bookname,
                //     _id: book._id,
                // }
            });
           }
           res.json({
            status: "error",
            message : "unable to add book, please try again"
        });

    }catch(error){
        error.code = 500
        if(error.message.includes("E11000 duplicate")){
            error.code = 200;
            error.message = "same isbn is already registered"
        }
        next(error);


    }
})


router.delete("/", async(req, res, next)  => {
    try {
        console.log(req.body, "delete boook");
        const result = await deleteManybooks(req.body.id);
        console.log(result, "from book router");
        result?.deletedCount
        ? res.json({
            status: "success",
            message: result.deletedCount + " item(s) deleted ",
          })
        : res.json({
            status: "error",
            message: "Nothing happened",
          });

    } catch (error) {
        next(error);
        
    }

})






export default router;