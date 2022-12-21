import BookSchema from "./BookSchema.js";

// add book
 export const insertBook = obj  => {
     return BookSchema(obj).save();
}

// get book 
export const getAllBooks= (filter) => {
    return BookSchema.find(filter);
}