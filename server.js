import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

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

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

const port = 8000;
app.listen(port, () => {
  connect();
  console.log(`Server listening on ${port}`);
});
