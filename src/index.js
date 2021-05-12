const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

// TODO: input * for home/index.html route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../index.html"));
// });
// app.get("/notes.html", (req, res) => {
//   res.sendFile(path.join(__dirname, "../notes.html"));
// });

app.listen(3000, () => console.log("Example app listening on port 3000!"));
