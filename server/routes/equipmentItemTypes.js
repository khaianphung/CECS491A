const router = require('express').Router();
const models = require('../models/index');

// index
router.get('/', (req, res) => {
  models.EquipmentItemType.findAll()
    .then(equipmentItemTypes => {
      res.json(equipmentItemTypes);
    })
    .catch(err => console.log(err))
});

// show
router.get('/:id', (req, res) => {
  const id = req.params.id;
  models.EquipmentItemType.findByPk(id)
    .then(equipmentItemType => {
      res.json(equipmentItemType);
    })
    .catch(err => console.log(err))
});

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
    .then(equipmentItemType => res.redirect('/equipmentItemTypes'))
    .catch(err => console.log(err));
});

// update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body.updates;
  models.EquipmentItemType.findByPk(id)
    .then(equipmentItemType => {
      EquipmentItemType.updateAttributes(updates);
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
    .then(equipmentItemType => {
      EquipmentItemType.destroy();
    })
    .then(deletedEquipmentItemType => {
      res.json(deletedEquipmentItemType);
    })
    .catch(err => console.log(err))
});

module.exports = router;