const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgon = require("morgan");
const cors = require("cors");

dotenv.config();
const app = express();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo");
  }
);

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgon("common"));
app.use(cors());

//routes

//server
app.listen(process.env.PORT, () => {
  console.log("backend server is ready");
});
