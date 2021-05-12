const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const db = require("../db/db.json");

// Setting up middleware
app.use(express.static("public"));
app.use(express.json());

// Routes
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.json(db);
});

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  // apply unique id to newNote
  db.push(newNote);
  fs.writeFile(
    path.join(__dirname, "..", "db", "db.json"),
    JSON.stringify(db, null, 2),
    (err) => {
      if (err) console.error(err);
      res.json(newNote);
    }
  );
});
// Handle 404 errors
app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
