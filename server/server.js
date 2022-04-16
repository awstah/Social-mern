const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgon = require("morgan");
const cors = require("cors");

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");

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
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

//server
app.listen(process.env.PORT, () => {
  console.log("backend server is ready");
});
