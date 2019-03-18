const router = require('express').Router();
const models = require('../models/index');
const wrap = require('../middleware/wrap');

// index
router.get("/", wrap(async (req, res, next) => {
  let venues = await models.Venue.findAll();
  res.json(venues);
}));

// show
router.get("/:id", wrap(async (req, res, next) => {
  const id = req.params.id;
  let venue = await models.Venue.findByPk(id);
  res.json(venue);
}));

// create
router.post('/create', (req, res) => {
  let { Venuename, email, status, first_name, last_name } = req.body;
  
  models.Venue.create({
    Venuename,
    email,
    status,
    first_name,
    last_name
  })
    .then(Venue => res.redirect('/Venues'))
    .catch(err => console.log(err));
});

// update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body.updates;
  models.Venue.findByPk(id)
    .then(Venue => {
      Venue.updateAttributes(updates);
    })
    .then(updatedVenue => {
      res.json(updatedVenue);
    })
    .catch(err => console.log(err))
});

// destroy
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  models.Venue.findByPk(id)
    .then(Venue => {
      Venue.destroy();
    })
    .then(deletedVenue => {
      res.json(deletedVenue);
    })
    .catch(err => console.log(err))
});

// Get all Venues with equipment items
// router.get('/:id/equipmentItems', (req, res) => {
//   models.Venue.findById(id, {
//     include: [models.EquipmentItem]
//   })
//   .then(Venue => {
//     res.json(Venue);
//   })
// });

// Get Venue with users
router.get('/:id/users', (req, res) => {
  const id = req.params.id;
  models.Venue.findById(id, {
    include: [models.User]
  })
  .then(users => {
    res.json(users);
  })
});
module.exports = router;