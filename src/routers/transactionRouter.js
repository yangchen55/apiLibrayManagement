import express from "express";
import {
  insertTransaction,
  getAllTrans,
} from "../models/bookTransaction/transactionModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    console.log("iam from trnas autho", authorization);

    const trans = await insertTransaction({
      ...req.body,
      userId: authorization,
    });
    console.log("i am from transaction", trans);

    res.json({
      status: "success",
      message: "posted suceessfully",
      trans,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const trans = await getAllTrans();
    res.json({
      status: "success",
      message: "listed suceessfully",
      trans,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
