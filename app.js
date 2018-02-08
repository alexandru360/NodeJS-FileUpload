// app.js

var express = require('express');
var app = express();

const fileUpload = require('express-fileupload');
app.use(fileUpload());

var FileController = require('./file-upload/file-upload');
app.use('/upload', FileController);

app.listen(3000);
console.log("Api on port 3000");

module.exports = app;
