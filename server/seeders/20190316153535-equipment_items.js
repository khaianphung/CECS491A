'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipmentItems', [
      { id: 1, userId: 5, equipmentItemTypeId: 1, itemCode: '000000000001', isCheckedOut: true, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 2, userId: 2, equipmentItemTypeId: 1, itemCode: '000000000002', isCheckedOut: true, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 3, userId: null, equipmentItemTypeId: 1, itemCode: '000000000003', isCheckedOut: false, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 4, userId: 1, equipmentItemTypeId: 2, itemCode: '000000000004', isCheckedOut: true, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 5, userId: 2, equipmentItemTypeId: 2, itemCode: '000000000005', isCheckedOut: true, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 6, userId: null, equipmentItemTypeId: 2, itemCode: '000000000006', isCheckedOut: false, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 7, userId: null, equipmentItemTypeId: 2, itemCode: '000000000007', isCheckedOut: false, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 8, userId: 3, equipmentItemTypeId: 3, itemCode: '000000000008', isCheckedOut: true, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 9, userId: 1, equipmentItemTypeId: 3, itemCode: '000000000009', isCheckedOut: true, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 10, userId: null, equipmentItemTypeId: 4, itemCode: '000000000010', isCheckedOut: false, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 11, userId: null, equipmentItemTypeId: 4, itemCode: '000000000011', isCheckedOut: false, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 12, userId: null, equipmentItemTypeId: 4, itemCode: '000000000012', isCheckedOut: false, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 13, userId: null, equipmentItemTypeId: 4, itemCode: '000000000013', isCheckedOut: false, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 14, userId: 4, equipmentItemTypeId: 5, itemCode: '000000000014', isCheckedOut: true, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 15, userId: null, equipmentItemTypeId: 5, itemCode: '000000000015', isCheckedOut: false, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 16, userId: null, equipmentItemTypeId: 5, itemCode: '000000000016', isCheckedOut: false, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() },
      { id: 17, userId: null, equipmentItemTypeId: 5, itemCode: '000000000017', isCheckedOut: false, createdAt: new Date().toMysqlFormat(), updatedAt: new Date().toMysqlFormat() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipmentItems', null);
  }
};
