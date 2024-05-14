const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/usersRoutes");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", usersRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on the port ${process.env.PORT}`);
});
