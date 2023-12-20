const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

//send data post method
router.post("/adduser", async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({ message: "added new User", newUser });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//get User Data
router.get("/getuser", async (req, res) => {
    try {
        const userdata = await User.find();
        res.status(201).json(userdata);
    } catch (err) {
        res.status(422).json(err)
    }
})

//get single User Data
router.get("/getuser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const singleuser = await User.findById({ _id: id });
        res.status(201).json(singleuser);
    } catch (err) {
        res.status(422).json(err);
    }
})

//Delete User Data
router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const delteuser = await User.findByIdAndDelete({ _id: id });
        res.status(201).json(delteuser);
    } catch (err) {
        res.status(422).json(err);
    }
})

// update User data
router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateuser = await User.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(201).json(updateuser);
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;