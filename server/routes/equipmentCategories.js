const express = require('express');
const router = express.Router();
const models = require('../models/index');

// index
router.get('/', (req, res) => {
  models.EquipmentCategory.findAll()
    .then(equipmentCategories => {
      res.json(equipmentCategories);
    })
    .catch(err => console.log(err))
});

// show
router.get('/:id', (req, res) => {
  const id = req.params.id;
  models.EquipmentCategory.findByPk(id)
  .then(equipmentCategory => {
    equipmentCategory.getEquipmentItemTypes()
      .then(equipmentItemTypes => {
        res.json(equipmentItemTypes);
      })
    // res.json(equipmentCategory);
  })
    // .then(equipmentCategory => {
    //   res.json(equipmentCategory.getEquipmentItemTypes());
    // })
    .catch(err => console.log(err))
});

// create
router.post('/create', (req, res) => {
  let { name } = req.body;
  
  models.EquipmentItemType.create({
    name
  })
    .then(equipmentCategory => res.redirect('/EquipmentCategories'))
    .catch(err => console.log(err));
});

// update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body.updates;
  models.EquipmentItemType.findByPk(id)
    .then(equipmentCategory => {
      equipmentCategory.updateAttributes(updates);
    })
    .then(updatedEquipmentCategory => {
      res.json(updatedEquipmentCategory);
    })
    .catch(err => console.log(err))
});

// destroy
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  models.EquipmentItemType.findByPk(id)
    .then(equipmentCategory => {
      equipmentCategory.destroy();
    })
    .then(deletedEquipmentCategory => {
      res.json(deletedEquipmentCategory);
    })
    .catch(err => console.log(err))
});

module.exports = router;