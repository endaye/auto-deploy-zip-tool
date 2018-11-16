const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer().single('zip');

/* POST upload API. */
router.post('/zip', (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log(err);
      res.send('You are a bad boy! ' + err);
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log(err);
      res.send('You are a really bad boy! ' + err);
    }
    console.log(req.file);
    if (req.file) {
      fs.writeFile('uploads/code.zip', req.file.buffer, (err) => {
        if (err) {
          res.send('You are a bad bad boy! ' + err);
        }
        console.log('The file has been saved!');
      });
    } else {
      res.send('Leave me alone, lazy boy!');
    }
    res.send('You are a kool boy!');
  })
});

module.exports = router;
