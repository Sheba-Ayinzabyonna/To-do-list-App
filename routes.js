const express = require("express");

const router = express.Router();

//GET METHOD
router.get("/posts", (req, res) => {
    // res.send("Posts page");

    res.json(
        {msg:'We are programming'}
    )
})
// shows a specific postNumber
router.get("/posts/:id", (req, res) => {
  
  res.json({ msg: "We use thunder" });
});

module.exports = router;