const express = require('express');
const router = express.Router();
const models = require('../models/index');

// index
router.get('/', (req, res) => {
  models.EquipmentItemType.findAll()
    .then(equipmentItems => {
      res.json(equipmentItems);
    })
    .catch(err => console.log(err))
});

// show
router.get('/:id', (req, res) => {
  const id = req.params.id;
  models.EquipmentItemType.findById(id)
    .then(equipmentItems => {
      res.json(equipmentItems);
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
    .then(equipmentItems => res.redirect('/EquipmentItems'))
    .catch(err => console.log(err));
});

// update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body.updates;
  models.EquipmentItemType.findById(id)
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
  models.EquipmentItemType.findById(id)
    .then(equipmentItems => {
      equipmentItems.destroy();
    })
    .then(deletedEquipmentItemType => {
      res.json(deletedEquipmentItemType);
    })
    .catch(err => console.log(err))
});

module.exports = router;