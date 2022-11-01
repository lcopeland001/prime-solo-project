const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET property
router.get('/', (req, res) => {

  const query = `SELECT * FROM property ORDER BY "address" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

router.get('/:id', (req, res) => {

  const query = `SELECT * FROM property WHERE "id"=$1`;
  pool.query(query, [req.params.id])
    .then(result => {
      // Return the first item in the array (which is an Object)
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

// PUT property
router.put('/:id', (req, res) => {
  const queryText = `UPDATE "property" SET "address" = $1, "photo" = $2, "other" = $3
                     WHERE "id" = $4;`; // AND "user_id" = $5; // For solo projects
  pool.query(queryText, [req.body.title, req.body.description, req.body.poster, req.params.id])
      .then(results => {
        res.sendStatus(200);
      }).catch(error => {
        console.log(error);
        res.sendStatus(500);
      })
})

// POST property
router.post('/', (req, res) => {
  console.log(req.body);
  const insertMovieQuery = `
  INSERT INTO "property" ("address", "photo", "other")
  VALUES ($1, $2, $3)
  RETURNING "id";`
pool.query(insertMovieQuery, [req.body.address, req.body.pphoto, req.body.other])
.then(result => {
  console.log('New Property Id:', result.rows[0].id); //ID IS HERE!
  
  const createdPropertyId = result.rows[0].id
  res.sendStatus(201);

}).catch(err => {
  console.log(err);
  res.sendStatus(500)
})
})

module.exports = router;
