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
    // console.log(req);
    console.log(req.body.userName);
    console.log(req.body.userPassword);
    res.send({
        status: true,
        data: req.body,
        message: "User Login API"
    });
});

app.listen("1201");