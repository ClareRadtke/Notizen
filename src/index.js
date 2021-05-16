const express = require("express");
const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");

const app = express();

let db = require("../db/db.json");
let port = process.env.PORT;

// Setting up middleware
app.use(express.static("public"));
app.use(express.json());

if (port == null || port == "") {
  port = 8000;
}
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
  newNote.id = uniqid();
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

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  db = db.filter((note) => note.id != id);
  fs.writeFile(
    path.join(__dirname, "..", "db", "db.json"),
    JSON.stringify(db, null, 2),
    (err) => {
      if (err) console.error(err);
      res.json(db);
    }
  );
});

// Handle errors
app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
