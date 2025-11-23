const express = require("express");
let app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send({
        status: true,
        message: "Home Route is working!"
    });
});

// Login Post API
app.post("/login", (req, res) => {
    res.send({
        status: true,
        data: req.body,
        message: "User Login API"
    });
});

app.listen("1201");