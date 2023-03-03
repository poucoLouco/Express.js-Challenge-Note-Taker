var db = require("../db/db.json");
var fs = require("fs");


// //GET /api/notes should read the db.json file and return all saved 
//notes as JSON.

app.get('/api/notes', function(req, res) {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    //and return all saved notes as JSON.
    dbData = JSON.parse(data);
    res.send(dbData);
  });
});

  
  /// POST /api/notes should receive a new note 
  app.post("/api/notes", function (req, res) {
    // /// Pto save on the request body
    db.push(req.body);
    // Add unique id to each note
    db.forEach((obj, i) => {
      obj.id = i + 1;
    });
    // add it to the db.json file, and then return the new note to
// the client. You'll need to find a way to give each note a unique
// id when it's saved 
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
      res.json(db);
    });
  });
  //DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
 // In order to delete a note,
//you'll need to read all notes from the db.json file(fs.readFileSync("db/db.json")), 
//and then rewrite the notes to the db.json file.
//DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete
 app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;
    // remove the note with the given id property,
    db.splice(id - 1, 1);
    // reassign id
    db.forEach((obj, i) => {
      obj.id = i + 1;
    });
    // and then rewrite the notes to the db.json file.
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
      res.json(db);
    });
  });

  module.exports = router;


 