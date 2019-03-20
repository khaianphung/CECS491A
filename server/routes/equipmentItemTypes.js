const router = require('express').Router();
const models = require('../models/index');
const wrap = require('../middleware/wrap');

// index
router.get("/", wrap(async (req, res, next) => {
  let equipmentItemTypes = await models.EquipmentItemType.findAll({ include: [models.EquipmentCategory] });
  res.json(equipmentItemTypes);
}));

// show
// router.get("/:id", wrap(async (req, res, next) => {
//   const id = req.params.id;
//   let equipmentItemTypes = await models.EquipmentItemType.findByPk(id)
//   res.json(equipmentItemTypes);
// }));

// show
// router.get("/:id", wrap(async (req, res, next) => {
//   const id = req.params.id;
//   let equipmentItemTypes = await models.EquipmentItemType.findByPk(id, {
//                                    include: [models.EquipmentCategory]
//                                  })
//   res.json(equipmentItemTypes);
// }));

// show
router.get("/:id", wrap(async (req, res, next) => {
  const id = req.params.id;
  let equipmentItemType = await models.EquipmentItemType.findByPk(id, {
                                   include: [models.EquipmentCategory]
                                 });
  if (equipmentItemType != null) {
    let equipmentItems = await equipmentItemType.getEquipmentItems();      
    equipmentItemType = equipmentItemType.toJSON();
    equipmentItemType.equipmentItems = equipmentItems;
  }
  res.json(equipmentItemType);
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

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   let equipmentItemType = models.EquipmentItemType.findByPk(id, {
//                                    include: [models.EquipmentCategory]
//                                   })
//                                   .then(equipmentItemType => {
//                                     return equipmentItemType.getEquipmentItems();
//                                   })
//                                   .then()
//   let equipmentItems = equipmentItemType.getEquipmentItems()
//                         .then(equipmentItem => {
//                           return equipmentItem
//                         });

//   // equipmentItemType.equipmentItems = 'equipmentItems';
//   // equipmentItemType.set('equipmentItems', equipmentItems);
//   // console.log(equipmentItemType);
//   // let test = {};
//   // test.hello = "wadddd";
//   res.json(equipmentItemType);
//   // res.json(test);
// });

module.exports = router;