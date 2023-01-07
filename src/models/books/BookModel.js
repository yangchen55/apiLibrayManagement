import BookSchema from "./BookSchema.js";

// add book
 export const insertBook = obj  => {
     return BookSchema(obj).save();
}

// get book 
export const getAllBooks= (filter) => {
    return BookSchema.find(filter);
}

// delete by id that will be send from axios
export const deleteManybooks = (id) => {
    return BookSchema.findByIdAndDelete(id)
}
     
 


