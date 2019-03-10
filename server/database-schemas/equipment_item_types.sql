USE `GEMS`;

CREATE TABLE IF NOT EXISTS `GEMS`.`equipment_item_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `equipment_category_id` int(11) NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `fk_equipment_item_types_equipment_category_id` (`equipment_category_id`),
  CONSTRAINT `fk_equipment_item_types_equipment_category_id` FOREIGN KEY (`equipment_category_id`) REFERENCES `equipment_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;