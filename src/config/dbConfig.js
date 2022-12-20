import mongoose from "mongoose";

 export const connectDB = () => {
    try{
       
        // const connStr = 'mongodb://localhost:27017/transaction'
        // mongodb+srv://transaction:<password>@cluster0.k4qvjoj.mongodb.net/?retryWrites=true&w=majority
        const con = 'mongodb://localhost:27017/library';
        const conn = mongoose.connect(con);

        conn ? console.log("mongo connected"):console.log("unable to connect Mongo");;
    } catch (error){
        console.log(error);
    }
};