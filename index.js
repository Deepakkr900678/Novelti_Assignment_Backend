const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")
const app = express();
const router = require("./routes/router");

var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(router);
app.use(morgan("dev"))

mongoose.connect(`mongodb+srv://deepak12345:deepak12345@cluster0.ho8jsbr.mongodb.net/novelti?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Database Connected Succssfully")
    }).catch((err) => {
        console.log(err)
    });

app.listen(5000);