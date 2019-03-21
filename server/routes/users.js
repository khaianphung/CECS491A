const router = require('express').Router();
const models = require('../models/index');
const wrap = require('../middleware/wrap');

// index
router.get("/", wrap(async (req, res, next) => {
  let users = await models.User.findAll();
  res.json(users);
}));

// show
router.get("/:id", wrap(async (req, res, next) => {
  const id = req.params.id;
  let user = await models.User.findByPk(id);
  if (user != null) {
    let equipmentItems = await user.getEquipmentItems()
    user = user.toJSON();
    user.equipmentItems = equipmentItems;
  }
  res.json(user);
}));

// create
router.post('/create', (req, res) => {
  let { username, email, status, first_name, last_name } = req.body;
  
  models.User.create({
    username,
    email,
    status,
    first_name,
    last_name
  })
    .then(user => res.redirect('/users'))
    .catch(err => console.log(err));
});

// update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body.updates;
  models.User.findByPk(id)
    .then(user => {
      user.updateAttributes(updates);
    })
    .then(updatedUser => {
      res.json(updatedUser);
    })
    .catch(err => console.log(err))
});

// destroy
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  models.User.findByPk(id)
    .then(user => {
      user.destroy();
    })
    .then(deletedUser => {
      res.json(deletedUser);
    })
    .catch(err => console.log(err))
});

// Get all users with equipment items
// router.get('/:id/equipmentItems', (req, res) => {
//   models.User.findById(id, {
//     include: [models.EquipmentItem]
//   })
//   .then(user => {
//     res.json(user);
//   })
// });

// Get user with equipment items
router.get('/:id/equipmentItems', (req, res) => {
  const id = req.params.id;
  models.User.findById(id, {
    include: [models.EquipmentItem]
  })
  .then(user => {
    res.json(user);
  })
});
module.exports = router;