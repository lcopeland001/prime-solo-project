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
  INSERT INTO "property" ("address", "photo", "other", "user_id")
  VALUES ($1, $2, $3, $4)
  RETURNING "id";`
pool.query(insertMovieQuery, [req.body.address, req.body.photo, req.body.other, req.user.id])
.then(result => {
  console.log('New Property Id:', result.rows[0].id); //ID IS HERE!
  
  const createdPropertyId = result.rows[0].id
  res.sendStatus(201);

}).catch(err => {
  console.log(err);
  res.sendStatus(500)
})
})

// Delete Property

// router.delete('/:id', (req, res) => {
//   pool.query('DELETE FROM "property" WHERE id=$1', [req.params.id]).then((result) => {
//       res.sendStatus(200);
//   }).catch((error) => {
//       console.log('Error DELETE Property', error);
//       res.sendStatus(500);
//   })
// });

router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const queryText = `DELETE FROM "property" WHERE "id" = $1 AND "user_id" = $2;`;
    pool.query(queryText, [req.params.id, req.user.id]).then(() => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log(error in router);
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(403); // forbidden
  };
});

module.exports = router;
