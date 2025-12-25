let express = require("express");
let mongoose = require("mongoose");
require('dotenv').config();


let app = express();

// Connect to MongoDb
mongoose.connect(process.env.DBURL).then(()=> {
    console.log("Connect to MongoDB");
    app.listen(8000, () => {
        console.log("Server is running on port 8000");
    });
});