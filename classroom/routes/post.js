const express = require("express");
const router = express.Router();
//Posts 
//Index
router.get("/", (req, res) =>{
    res.send("Get for post");
});

//Show 
router.get("/:id",(req, res) =>{
    res.send("Get for show post");
});

//POST 
router.post("/", (req, res) =>{
    res.send("POST for post id");
});

//Delete 
router.delete("/:id",(req, res) =>{
    res.send("Delete for post id");
});
module.exports = router;