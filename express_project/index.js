const express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send({
        status: true,
        message: "Home Route is working!"
    })
});

app.listen("1201");