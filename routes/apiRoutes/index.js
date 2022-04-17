const router = require("express").Router();
const { createNewNote } = require("../../lib/notes.js");
const { notes } = require("../../db/db.json");
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  // add a unique id
  req.body.id = uuidv4();
  const note = createNewNote(req.body, notes);
  res.json(note);
  console.log("post");
});

router.delete("/notes/:id", (req, res) => {
  console.log("delete");
});

module.exports = router;