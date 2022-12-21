import mongoose  from "mongoose";
 const bookSchema = new mongoose.Schema ({
    bookname: {
        type: String, 
        required: true
    },
    isbn :{
        type: String,
        required: true,
        unique: true,
        index: 1

    },

    author: {
        type: String, 
        required: true
    },

    pdate:{
        type: Date,
       
    },
    abstract:{
        type: String, 
      
        

    }
},
{
    timestamps:true
}


 );
 export default mongoose.model("Book", bookSchema) //users
 

