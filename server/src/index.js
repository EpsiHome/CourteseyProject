
const express = require('express') 

const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Hello here am i");
});