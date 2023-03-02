// //GET /api/notes should read the db.json file and return all saved 
//notes as JSON.

const router = require("express").Router();
const fs = require("fs");

router.get("/notes", function(req, res) {
    fs.readFile("db/db.json", "utf8", (err, jsonString) => {
      if (err) {
        console.log("uuups:", err);
        return;
      }
      res.json(JSON.parse(jsonString));
    });
  });


/// POST /api/notes should receive a new note to save on the request 
//body, add it to the db.json file, and then return the new note to
// the client. You'll need to find a way to give each note a unique
// id when it's saved 
//(look into npm packages that could do this for you).
  router.post("/notes", ({ body }, res) => {
    const rawData = fs.readFileSync("db/db.json");
    const parseData = JSON.parse(rawData);
    const newObj = parseData.concat(newObj);
    const string = JSON.stringify(newObj);
    fs.writeFile("db/db.json", string, function(err) {
      if (err) console.log(err);
      res.json(string);
    });
  });
  

  //DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
 // In order to delete a note,
//you'll need to read all notes from the db.json file(fs.readFileSync("db/db.json")), remove the note with the given id property, 
//and then rewrite the notes to the db.json file.

router.delete("/notes/:id", function(req, res) {
    const rawData = fs.readFileSync("db/db.json");
    const parseData = JSON.parse(rawData);
    const newData = parseData.filter(obj => {
      return obj.id != req.params.id;
    });
    fs.writeFile("db/db.json", JSON.stringify(newData)),
      function(err) {
        if (err) console.log(err);
        res.send(newData);
      };
  });
  
  module.exports = router;