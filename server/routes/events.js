const router = require('express').Router();
const models = require('../models/index');
const wrap = require('../middleware/wrap');

// index
router.get("/", wrap(async (req, res, next) => {
  let event = await models.Event.findAll();
  res.json(event);
}));

// show
router.get("/:id", wrap(async (req, res, next) => {
  const id = req.params.id;
  let event = await models.Event.findByPk(id);
  res.json(event);
}));

// create
router.post('/create', (req, res) => {
  let { Eventname, email, status, first_name, last_name } = req.body;
  
  models.Event.create({
    Eventname,
    email,
    status,
    first_name,
    last_name
  })
    .then(Event => res.redirect('/Events'))
    .catch(err => console.log(err));
});

// update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body.updates;
  models.Event.findByPk(id)
    .then(Event => {
      Event.updateAttributes(updates);
    })
    .then(updatedEvent => {
      res.json(updatedEvent);
    })
    .catch(err => console.log(err))
});

// destroy
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  models.Event.findByPk(id)
    .then(Event => {
      Event.destroy();
    })
    .then(deletedEvent => {
      res.json(deletedEvent);
    })
    .catch(err => console.log(err))
});

// Get all Events with equipment items
// router.get('/:id/equipmentItems', (req, res) => {
//   models.Event.findById(id, {
//     include: [models.EquipmentItem]
//   })
//   .then(Event => {
//     res.json(Event);
//   })
// });

// Get Event with users
router.get("/:id/users", wrap(async (req, res, next) => {
  const id = req.params.id;
  let event = await models.Event.findByPk(id, {
    include: [models.User]
  });
  res.json(event);
}));

module.exports = router;