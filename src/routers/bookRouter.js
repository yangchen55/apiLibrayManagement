import express from "express";

const router = express.Router();
import {getAllBooks, insertBook} from "../models/books/BookModel.js"

router.get("/", async(req, res, next)  => {
    try {
        const books = await getAllBooks();
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
        const book = await insertBook(req.body);
        if(book?._id){
            res.json({
                status: "success",
                message : "book added suceessfully",
                book:{
                    name: book.bookname,
                    _id: book._id,
                }
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

// router.post("/login", async(req, res, next)  => {
//     try {
//         // grab the data coming from loging form 
//        const user = await  findAuser(req.body);
//        console.log(user);

//         // querry database with email and pin if there is account exits
// user?._id 
// ? res.json ({
//     status : 'success',
//     message: "login successfully",
//     user: {
//         _id: user._id,
//         email: user.email,
//         type: user.type
//     }

// }): 
// res.json ({
//     status : 'error',
//     message: "invalid details",

// });
//         // true, login success
//         // false, invalid login 
        
//     } catch (error) {

//          error.code = 200;
//         if(error.message.includes("invalid")){
//             error.code = 200;
//             error.message = "double email address"
//         }
       
//         next(error)
        
//     }
// })





export default router;