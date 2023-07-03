const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://gehan:gehan@store.svxomz2.mongodb.net/?retryWrites=true&w=majority")

.then(() => console.log("Connected To Database"))
.then(() => {
    app.listen(5000, () => {
        console.log("Server is running on port 5000")
    });
})
.catch((err) => console.log(err));

const book = require("./routes/bookroutes");
app.use("/books",book);

const user = require("./routes/userroutes");
app.use("/users",user);