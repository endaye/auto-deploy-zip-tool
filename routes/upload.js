const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer().single('zip');

/* GET home page. */
router.get('/zip', function (req, res, next) {
  res.redirect('/');
});

/* POST upload API. */
router.post('/zip', (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(406).send('You are a bad boy! ' + err);
      return next();
    } else if (err) {
      res.status(406).send('You are a really bad boy! ' + err);
      return next();
    }
    console.log(req.file);
    if (req.file) {
      fs.writeFile('uploads/code.zip', req.file.buffer, (err) => {
        if (err) {
          res.status(406).send('You are a bad bad boy! ' + err);
          return next();
        }
        res.status(200).send('You are a kool boy! The file has been saved on server! ');
        return next();
      });
    } else {
      res.status(406).send('Empty file, loser!');
      return next();
    }
  })
});

module.exports = router;
