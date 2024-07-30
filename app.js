const express = require("express");

const app = express();

const mongoose = require("mongoose");

const port = 8080;

app.get("/", (req, res) => {
    res.send("Hii!");
})

app.listen(port, () => {
    console.log(`app is listeing on port: ${port}`);
});