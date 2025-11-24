const express = require("express");
const { checkLoginToken } = require("./checkLoginTokenMiddleware");
require("dotenv").config();

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

// app.use(checkLoginToken); // App Level Middleware

    app.get("/dashboard", checkLoginToken, (req, res) => {
    res.send("Welcome to the Dashboard!");
});

// app.listen("1201");
app.listen(process.env.PORT);