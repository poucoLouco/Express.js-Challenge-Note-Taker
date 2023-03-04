//GET /notes should return the notes.html file.

//GET * should return the index.html file.

const path = require("path");
const router = require("express").Router();




// "/notes" responds with the notes.html file


router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// other routes responds with the index.html file if not match with
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});



module.exports = router;