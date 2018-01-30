const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express(); // Framework
const port = 3000; // Port

// Connect to database
const config = require("./config/database");
mongoose.connect(config.database); // Local database
mongoose.connection.on('connected', () => {
    console.log("connected to database"+config.database);
});
mongoose.connection.on('error', (err) => {
    console.log("database error"+err)
})

// Make route
const questions = require("./routes/questions");
app.use("/questions", questions);

// Index routes
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

// Starts the server
app.listen(port, ()=>{
    console.log("server started on port");
});

// comment
/* comment */
