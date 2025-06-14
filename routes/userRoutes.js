const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create new user
router.post("/", async (req, res) => {
    console.log(req)
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
