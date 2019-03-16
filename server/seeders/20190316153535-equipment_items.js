'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('equipment_items', [
      { id: 1, user_id: 5, equipment_item_type_id: 1, item_code: '000000000001', is_checked_out: true, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 2, user_id: 2, equipment_item_type_id: 1, item_code: '000000000002', is_checked_out: true, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 3, user_id: null, equipment_item_type_id: 1, item_code: '000000000003', is_checked_out: false, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 4, user_id: 1, equipment_item_type_id: 2, item_code: '000000000004', is_checked_out: true, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 5, user_id: 2, equipment_item_type_id: 2, item_code: '000000000005', is_checked_out: true, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 6, user_id: null, equipment_item_type_id: 2, item_code: '000000000006', is_checked_out: false, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 7, user_id: null, equipment_item_type_id: 2, item_code: '000000000007', is_checked_out: false, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 8, user_id: 3, equipment_item_type_id: 3, item_code: '000000000008', is_checked_out: true, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 9, user_id: 1, equipment_item_type_id: 3, item_code: '000000000009', is_checked_out: true, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 10, user_id: null, equipment_item_type_id: 4, item_code: '000000000010', is_checked_out: false, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 11, user_id: null, equipment_item_type_id: 4, item_code: '000000000011', is_checked_out: false, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 12, user_id: null, equipment_item_type_id: 4, item_code: '000000000012', is_checked_out: false, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 13, user_id: null, equipment_item_type_id: 4, item_code: '000000000013', is_checked_out: false, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 14, user_id: 4, equipment_item_type_id: 5, item_code: '000000000014', is_checked_out: true, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 15, user_id: null, equipment_item_type_id: 5, item_code: '000000000015', is_checked_out: false, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 16, user_id: null, equipment_item_type_id: 5, item_code: '000000000016', is_checked_out: false, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() },
      { id: 17, user_id: null, equipment_item_type_id: 5, item_code: '000000000017', is_checked_out: false, created_at: new Date().toMysqlFormat(), updated_at: new Date().toMysqlFormat() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('equipment_items', null);
  }
};
