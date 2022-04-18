const router = require("express").Router();
const { createNewNote, deleteNote } = require("../../lib/notes.js");
const { notes } = require("../../db/db.json");
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
  let results = notes;
  if (results){
    res.json(results);
  }
  else {
    res.send(404);
  }
});

router.post("/notes", (req, res) => {
  // add a unique id
  req.body.id = uuidv4();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  // match id with index of note to be deleted
  let match = object => object.id === req.params.id;
  let index = notes.findIndex(match);
  // remove note with that index from data array
  // rewrite edited json data to json file
  let removed = deleteNote(index, notes);
  res.json(notes);
});

module.exports = router;