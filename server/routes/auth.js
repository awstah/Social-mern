const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register User
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!(email && password && username)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    const user = await newUser.save();

    const token = jwt.sign({ user: newUser._id, email }, "test", {
      expiresIn: "1h",
    });

    user.token = token;

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const user = await User.findOne({ email });

    !user && res.status(400).json("user not found");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (user && validPassword) {
      const token = jwt.sign({ user_id: user._id, email }, "test", {
        expiresIn: "1h",
      });

      user.token = token;
      res.status(200).json(user);
    }
    !validPassword && res.status(400).json("wrong password");
  } catch (error) {
    res.status(500).json(error);
  }
});

//checking username valid
router.post("/username", async (req, res) => {
  try {
    const { username } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      res.status(200).json("username already taken");
    }
    if (user) {
      res.status(200).json("username availble");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
