// app.js

var express = require('express');
var app = express();

const fileUpload = require('express-fileupload');
app.use(fileUpload());

var FileController = require('./src/file-upload');
app.use('/upload', FileController);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });
  
module.exports = app;
