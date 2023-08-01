import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import {
  notFound,
  globalErrorHandler,
} from "./src/middleware/globalErrorHandler.js";
import userRoute from "./src/routes/userRoute.js";

dotenv.config();
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Database connection established!");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);

app.use(notFound);
app.use(globalErrorHandler);

const port = 8000;
app.listen(port, () => {
  connect();
  console.log(`Server listening on ${port}`);
});
