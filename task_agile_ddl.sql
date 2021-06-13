/* SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0; */
/* SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0; */
/* SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES'; */

-- SQLINES DEMO *** ------------------------------------
-- Schema task_agile
-- SQLINES DEMO *** ------------------------------------

-- SQLINES DEMO *** ------------------------------------
-- Schema task_agile
-- SQLINES DEMO *** ------------------------------------
--CREATE SCHEMA IF NOT EXISTS task_agile DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
--USE task_agile ;

-- SQLINES DEMO *** ------------------------------------
-- SQLINES DEMO *** `.`user`
-- SQLINES DEMO *** ------------------------------------
DROP TABLE IF EXISTS public.user ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE public.user_seq;

CREATE TABLE IF NOT EXISTS public.user (
  id INT NOT NULL DEFAULT NEXTVAL ('public.user_seq'),
  email_address VARCHAR(128) NOT NULL,
  username VARCHAR(64) NOT NULL,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_date TIMESTAMP(0) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT email_address_uidx UNIQUE  (email_address),
  CONSTRAINT username_uidx UNIQUE  (username))
;


-- SQLINES DEMO *** ------------------------------------
-- SQLINES DEMO *** `.`team`
-- SQLINES DEMO *** ------------------------------------
DROP TABLE IF EXISTS public.team ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE public.team_seq;

CREATE TABLE IF NOT EXISTS public.team (
  id INT NOT NULL DEFAULT NEXTVAL ('public.team_seq'),
  name VARCHAR(128) NOT NULL,
  user_id INT NOT NULL,
  archived SMALLINT NOT NULL DEFAULT 0,
  created_date TIMESTAMP(0) NOT NULL,
  PRIMARY KEY (id)
 ,
  CONSTRAINT fk_team_user_user_id
    FOREIGN KEY (user_id)
    REFERENCES public.user (id)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION)
;

CREATE INDEX fk_user_id_idx ON public.team (user_id);


-- SQLINES DEMO *** ------------------------------------
-- SQLINES DEMO *** `.`board`
-- SQLINES DEMO *** ------------------------------------
DROP TABLE IF EXISTS public.board ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE public.board_seq;

CREATE TABLE IF NOT EXISTS public.board (
  id INT NOT NULL DEFAULT NEXTVAL ('public.board_seq'),
  name VARCHAR(128) NOT NULL,
  description VARCHAR(256) NOT NULL,
  user_id INT NOT NULL,
  team_id INT NULL,
  archived SMALLINT NOT NULL DEFAULT 0,
  created_date TIMESTAMP(0) NOT NULL,
  PRIMARY KEY (id)
 ,
  CONSTRAINT fk_board_team_team_id
    FOREIGN KEY (team_id)
    REFERENCES public.team (id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT fk_board_user_user_id
    FOREIGN KEY (user_id)
    REFERENCES public.user (id)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION)
;

CREATE INDEX fk_team_id_idx ON public.board (team_id ASC);
CREATE INDEX fk_user_id_idx ON public.board (user_id ASC);


-- SQLINES DEMO *** ------------------------------------
-- SQLINES DEMO *** `.`board_member`
-- SQLINES DEMO *** ------------------------------------
DROP TABLE IF EXISTS public.board_member ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE IF NOT EXISTS public.board_member (
  board_id INT NOT NULL,
  user_id INT NOT NULL
 ,
  PRIMARY KEY (user_id, board_id),
  CONSTRAINT fk_board_member_board_board_id
    FOREIGN KEY (board_id)
    REFERENCES public.board (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_board_member_user_user_id
    FOREIGN KEY (user_id)
    REFERENCES public.user (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

CREATE INDEX fk_board_id_idx ON public.board_member (board_id ASC);
CREATE INDEX fk_user_id_idx ON public.board_member (user_id ASC);


-- SQLINES DEMO *** ------------------------------------
-- SQLINES DEMO *** `.`card_list`
-- SQLINES DEMO *** ------------------------------------
DROP TABLE IF EXISTS public.card_list ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE public.card_list_seq;

CREATE TABLE IF NOT EXISTS public.card_list (
  id INT NOT NULL DEFAULT NEXTVAL ('public.card_list_seq'),
  board_id INT NOT NULL,
  user_id INT NOT NULL,
  name VARCHAR(128) NOT NULL,
  position INT NOT NULL,
  archived SMALLINT NOT NULL DEFAULT 0,
  created_date TIMESTAMP(0) NOT NULL,
  PRIMARY KEY (id)
 ,
  CONSTRAINT fk_card_list_board_board_id
    FOREIGN KEY (board_id)
    REFERENCES public.board (id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT fk_card_list_user_user_id
    FOREIGN KEY (user_id)
    REFERENCES public.user (id)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION)
;

CREATE INDEX fk_board_id_idx ON public.card_list (board_id ASC);
CREATE INDEX fk_user_id_idx ON public.card_list (user_id ASC);


-- SQLINES DEMO *** ------------------------------------
-- SQLINES DEMO *** `.`card`
-- SQLINES DEMO *** ------------------------------------
DROP TABLE IF EXISTS public.card ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE public.card_seq;

CREATE TABLE IF NOT EXISTS public.card (
  id INT NOT NULL DEFAULT NEXTVAL ('public.card_seq'),
  card_list_id INT NOT NULL,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  position INT NOT NULL,
  archived SMALLINT NOT NULL,
  created_date TIMESTAMP(0) NOT NULL,
  PRIMARY KEY (id)
 ,
  CONSTRAINT fk_card_card_list_card_list_id
    FOREIGN KEY (card_list_id)
    REFERENCES public.card_list (id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT fk_card_user_user_id
    FOREIGN KEY (user_id)
    REFERENCES public.user (id)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION)
;

CREATE INDEX fk_card_list_id_idx ON public.card (card_list_id ASC);
CREATE INDEX fk_user_id_idx ON public.card (user_id ASC);


-- SQLINES DEMO *** ------------------------------------
-- SQLINES DEMO *** `.`assignment`
-- SQLINES DEMO *** ------------------------------------
DROP TABLE IF EXISTS public.assignment ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE IF NOT EXISTS public.assignment (
  card_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (card_id, user_id)
 ,
  CONSTRAINT fk_assignment_card_card_id
    FOREIGN KEY (card_id)
    REFERENCES public.card (id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT fk_assignment_user_user_id
    FOREIGN KEY (user_id)
    REFERENCES public.user (id)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION)
;

CREATE INDEX fk_user_id_idx ON public.assignment (user_id ASC);


-- SQLINES DEMO *** ------------------------------------
-- SQLINES DEMO *** `.`attachment`
-- SQLINES DEMO *** ------------------------------------
DROP TABLE IF EXISTS public.attachment ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE public.attachment_seq;

CREATE TABLE IF NOT EXISTS public.attachment (
  id INT NOT NULL DEFAULT NEXTVAL ('public.attachment_seq'),
  card_id INT NOT NULL,
  user_id INT NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  file_type INT NOT NULL,
  archived SMALLINT NOT NULL DEFAULT 0,
  created_date TIMESTAMP(0) NOT NULL,
  PRIMARY KEY (id)
 ,
  CONSTRAINT fk_attachment_card_card_id
    FOREIGN KEY (card_id)
    REFERENCES public.card (id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT fk_attachment_user_user_id
    FOREIGN KEY (user_id)
    REFERENCES public.user (id)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION)
;

CREATE INDEX fk_card_id_idx ON public.attachment (card_id ASC);
CREATE INDEX fk_user_id_idx ON public.attachment (user_id ASC);


-- SQLINES DEMO *** ------------------------------------
-- SQLINES DEMO *** `.`activity`
-- SQLINES DEMO *** ------------------------------------
DROP TABLE IF EXISTS public.activity ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE public.activity_seq;

CREATE TABLE IF NOT EXISTS public.activity (
  id INT NOT NULL DEFAULT NEXTVAL ('public.activity_seq'),
  user_id INT NOT NULL,
  card_id INT NULL,
  board_id INT NOT NULL,
  type SMALLINT NOT NULL DEFAULT 0,
  detail JSON NOT NULL,
  created_date TIMESTAMP(0) NOT NULL,
  PRIMARY KEY (id)
 ,
  CONSTRAINT fk_activity_user_user_id
    FOREIGN KEY (user_id)
    REFERENCES public.user (id)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION,
  CONSTRAINT fk_activity_board_board_id
    FOREIGN KEY (board_id)
    REFERENCES public.board (id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT fk_activity_card_card_id
    FOREIGN KEY (card_id)
    REFERENCES public.card (id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
;

CREATE INDEX fk_user_id_idx ON public.activity (user_id ASC);
CREATE INDEX fk_board_id_idx ON public.activity (board_id ASC);
CREATE INDEX fk_card_id_idx ON public.activity (card_id ASC);


/* SET SQL_MODE=@OLD_SQL_MODE; */
/* SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS; */
/* SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS; */