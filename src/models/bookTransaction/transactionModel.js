import transactionSchema from "./transactionSchema.js";

// add to the database
export const insertTransaction = (obj) => {
  return transactionSchema(obj).save();
};

export const getAllTrans = (filter) => {
  return transactionSchema.find(filter);
};

export const deleteManyTrans = (id) => {
  return transactionSchema.findByIdAndDelete(id);
};
