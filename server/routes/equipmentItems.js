const router = require('express').Router();
const models = require('../models/index');
const wrap = require('../middleware/wrap');

// index
router.get("/", wrap(async (req, res, next) => {
  let equipmentItems = await models.EquipmentItemType.findAll();
  res.json(equipmentItems);
}));

// show
router.get("/:id", wrap(async (req, res, next) => {
  let equipmentItem = await models.EquipmentItemType.findByPk(id)
  res.json(equipmentItem);
}));

// create
router.post('/create', (req, res) => {
  let { EquipmentItemTypename, email, status, first_name, last_name } = req.body;
  
  models.EquipmentItemType.create({
    EquipmentItemTypename,
    email,
    status,
    first_name,
    last_name
  })
    .then(equipmentItems => res.redirect('/EquipmentItems'))
    .catch(err => console.log(err));
});

// update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body.updates;
  models.EquipmentItemType.findByPk(id)
    .then(equipmentItems => {
      equipmentItems.updateAttributes(updates);
    })
    .then(updatedEquipmentItemType => {
      res.json(updatedEquipmentItemType);
    })
    .catch(err => console.log(err))
});

// destroy
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  models.EquipmentItemType.findByPk(id)
    .then(equipmentItems => {
      equipmentItems.destroy();
    })
    .then(deletedEquipmentItemType => {
      res.json(deletedEquipmentItemType);
    })
    .catch(err => console.log(err))
});

module.exports = router;