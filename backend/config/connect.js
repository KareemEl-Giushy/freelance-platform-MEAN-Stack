const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/freelance")
.then(() => console.log("Connected to Database"))
.catch((err) => console.error("Something Went Wrong: ", err));
