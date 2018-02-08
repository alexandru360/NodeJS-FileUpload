var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const fs = require('fs');

router.use(bodyParser.urlencoded({ extended: true }));

// RETURNS ALL THE USERS IN THE DATABASE
router.post('/', function (req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  //Replace this with the name of the file you want to uplad !
  fs.writeFile('/upload/test-upload.text', sampleFile.data, function (err) {
    if (err) throw err;
    console.log('Works ?!');
    res.status(200).send('ok');
  });
});

module.exports = router;
