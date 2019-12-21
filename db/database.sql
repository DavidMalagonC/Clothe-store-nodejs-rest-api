CREATE DATABASE IF NOT EXISTS clothes_store;

USE clothes_store;

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `birth_date` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(15) NULL,
  `document` INT NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`));


CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`category_id`));


CREATE TABLE IF NOT EXISTS `state` (
  `state_id` INT NOT NULL AUTO_INCREMENT,
  `state` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`state_id`));


CREATE TABLE IF NOT EXISTS `clothes` (
  `clothes_id` INT NOT NULL AUTO_INCREMENT,
  `category_id` INT NOT NULL,
  `size` VARCHAR(10) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `user_id` INT NOT NULL,
  `state_id` INT NOT NULL,
  PRIMARY KEY (`clothes_id`),
  INDEX `fk_user_id_idx` (`user_id` ASC) ,
  INDEX `fk_category_id_idx` (`category_id` ASC) ,
  INDEX `fk_state_id_idx` (`state_id` ASC) ,
  CONSTRAINT `fk_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `categories` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_state_id`
    FOREIGN KEY (`state_id`)
    REFERENCES `state` (`state_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);