USE `GEMS`;

CREATE TABLE IF NOT EXISTS `GEMS`.`equipment_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `equipment_item_type_id` int(11) NOT NULL,
  `item_code` int(11) NOT NULL,
  `is_checked_out` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_equipment_items_user_id` (`user_id`),
  KEY `fk_equipment_items_equipment_item_type_id` (`equipment_item_type_id`),
  CONSTRAINT `fk_equipment_items_equipment_item_type_id` FOREIGN KEY (`equipment_item_type_id`) REFERENCES `equipment_item_types` (`id`),
  CONSTRAINT `fk_equipment_items_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)  
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;