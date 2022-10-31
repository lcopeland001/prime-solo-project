const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET properties
router.get('/', (req, res) => {
  console.log("In GET request");
});

// POST properties
router.post('/', (req, res) => {
  console.log('POST req.body', req.body);
  let queryText = 'INSERT INTO "property" ("address", "photo", "other") VALUES ($1, $2, $3,);';
  let { address, photo, other } = req.body;
  pool.query(queryText, [address, photo, other])
      .then((result) => {
          res.sendStatus(200);
      }).catch((err) => {
          console.log(err);
          res.sendStatus(500);
      });
});

module.exports = router;
