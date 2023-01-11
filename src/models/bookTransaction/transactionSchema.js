import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    studentName: {
      type: String,
    },

    bookId: {
      type: mongoose.Types.ObjectId,
      ref: "Book",
      required: true,
    },

    bookname: {
      type: String,
    },
    isbn: {
      type: String,
      unique: true,
      index: 1,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("transaction", transactionSchema);
// in mongodb  user id will be object
