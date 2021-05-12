const express = require("express");
const path = require("path");

const app = express();

const db = require("../db/db.json");

app.use(express.static("public"));
app.use(express.json());
// TODO: input * for home/index.html route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.send(JSON.stringify(db));
});

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  db.push(newNote);
  res.json(newNote);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
