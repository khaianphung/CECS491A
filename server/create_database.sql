USE `GEMS`;

CREATE TABLE IF NOT EXISTS `GEMS`.`equipment_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

CREATE TABLE IF NOT EXISTS `GEMS`.`equipment_item_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `equipment_category_id` int(11) NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `fk_equipment_item_types_equipment_category_id` (`equipment_category_id`),
  CONSTRAINT `fk_equipment_item_types_equipment_category_id` FOREIGN KEY (`equipment_category_id`) REFERENCES `equipment_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

CREATE TABLE IF NOT EXISTS `GEMS`.`users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'Active',
  `first_name` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `last_name` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

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

INSERT INTO `GEMS`.`users` (username, email, first_name, last_name)
VALUES  ('dpan216', 'danthegoofygoober@gmail.com', 'Daniel', 'Pan'),
        ('foobar123', 'foobar@gmail.com', 'Foo', 'Bar'),
        ('swagster098', 'swagster@yahoo.com', 'Billy', 'Jean'),
        ('jamster', 'jamster@gmail.com', 'Jamie', 'Tess'),
        ('jpotter', 'jpotter@hotmail.com', 'Johnny', 'Potter');

INSERT INTO `GEMS`.`equipment_categories` (name)
VALUES  ('Headwear'), 
        ('Apparel'), 
        ('Electronics');

INSERT INTO `GEMS`.`equipment_item_types` (name, equipment_category_id, description)
VALUES  ('Hat', 1, "This is a hat"),
        ('T-Shirt', 2, "This is a T-shirt"),
        ('External Battery', 3, "This is an external battery"),
        ('Laptop', 3, "This is a laptop"),
        ('iPhone', 3, "This is an iPhone");

INSERT INTO `GEMS`.`equipment_items` (user_id, equipment_item_type_id, item_code, is_checked_out)
VALUES  (5, 1, '000000000001', 1),
        (2, 1, '000000000002', 1),
        (null, 1, '000000000003', 0),
        (1, 2, '000000000004', 1),
        (2, 2, '000000000005', 1),
        (null, 2, '000000000006', 1),
        (null, 2, '000000000007', 1),
        (3, 3, '000000000008', 1),
        (1, 3, '000000000009', 1),
        (null, 4, '000000000010', 1),
        (null, 4, '000000000011', 1),
        (null, 4, '000000000012', 1),
        (null, 4, '000000000013', 1),
        (4, 5, '000000000014', 1),
        (null, 5, '000000000015', 1),
        (null, 5, '000000000016', 1),
        (null, 5, '000000000017', 1);        