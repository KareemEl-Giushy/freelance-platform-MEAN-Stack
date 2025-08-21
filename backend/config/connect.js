const mongoose = require("mongoose");

mongoose.connect("mongodb://user:password@127.0.0.1:27017/freelance?authSource=admin")
.then(() => console.log("Connected to Database"))
.catch((err) => console.error("Something Went Wrong: ", err));
