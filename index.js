import express from "express";
import connectDB from "./mongodb";
import studentModule from "./Module/Student";
const app = express();
const port = process.env.PORT || 8000;
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017";

connectDB(MONGO_URL);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 