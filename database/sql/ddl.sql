DROP DATABASE IF EXISTS universe;

CREATE DATABASE IF NOT EXISTS universe CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

USE universe;

DROP TABLE IF EXISTS result;

DROP TABLE IF EXISTS personality_pathway_ufsm_course;

DROP TABLE IF EXISTS personality_pathway;

DROP TABLE IF EXISTS ufsm_course;

DROP TABLE IF EXISTS pathway;

DROP TABLE IF EXISTS personality;

DROP TABLE IF EXISTS test_statement;

DROP TABLE IF EXISTS `option`;

DROP TABLE IF EXISTS `statement`;

DROP TABLE IF EXISTS test;

DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (
    id         INT          NOT NULL AUTO_INCREMENT,
    code       CHAR(3)      NOT NULL,
    username   VARCHAR(63)  NOT NULL,
    email      VARCHAR(255)     NULL,
    created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT pk_user            PRIMARY KEY (id),
    CONSTRAINT uq_user_code       UNIQUE      (code),
    CONSTRAINT uq_user_created_at UNIQUE      (created_at)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS personality (
    id                INT          NOT NULL,
    letter            CHAR(1)      NOT NULL,
    `name`            VARCHAR(15)  NOT NULL,
    `description`     VARCHAR(255) NOT NULL,
    story_title       VARCHAR(63)  NOT NULL,
    story_description VARCHAR(511) NOT NULL,

    CONSTRAINT pk_personality                   PRIMARY KEY (id),
    CONSTRAINT uq_personality_letter            UNIQUE      (letter),
    CONSTRAINT uq_personality_name              UNIQUE      (`name`),
    CONSTRAINT uq_personality_description       UNIQUE      (`description`),
    CONSTRAINT uq_personality_story_title       UNIQUE      (story_title),
    CONSTRAINT uq_personality_story_description UNIQUE      (story_description)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `statement` (
    id             INT          NOT NULL,
    riasec_title   VARCHAR(63)  NOT NULL,
    story_title    VARCHAR(63)  NOT NULL,
    story_text     VARCHAR(511) NOT NULL,
    personality_id INT          NOT NULL,

    CONSTRAINT pk_statement              PRIMARY KEY (id),
    CONSTRAINT fk_statement_personality  FOREIGN KEY (personality_id) REFERENCES personality (id),
    CONSTRAINT uq_statement_riasec_title UNIQUE      (riasec_title)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `option` (
    id            INT                 NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(511)        NOT NULL,
    `value`       TINYINT(1) UNSIGNED NOT NULL,
    statement_id  INT                 NOT NULL,

    CONSTRAINT pk_option             PRIMARY KEY (id),
    CONSTRAINT fk_option_statement   FOREIGN KEY (statement_id) REFERENCES `statement` (id),
    CONSTRAINT uq_option_description UNIQUE      (`description`)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS test (
    id         INT      NOT NULL AUTO_INCREMENT,
    user_id    INT      NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT pk_test            PRIMARY KEY (id),
    CONSTRAINT fk_test_user       FOREIGN KEY (user_id) REFERENCES user (id),
    CONSTRAINT uq_test_user_id    UNIQUE      (user_id),
	CONSTRAINT uq_test_created_at UNIQUE      (created_at)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS test_statement (
    id                 INT NOT NULL AUTO_INCREMENT,
    test_id            INT NOT NULL,
    statement_id       INT NOT NULL,
    selected_option_id INT NOT NULL,

    CONSTRAINT pk_test_statement                          PRIMARY KEY (id),
    CONSTRAINT fk_test_statement_test                     FOREIGN KEY (test_id)            REFERENCES test (id),
    CONSTRAINT fk_test_statement_statement                FOREIGN KEY (statement_id)       REFERENCES `statement` (id),
    CONSTRAINT fk_test_statement_option                   FOREIGN KEY (selected_option_id) REFERENCES `option` (id),
    CONSTRAINT uq_test_statement_test_id_and_statement_id UNIQUE      (test_id, statement_id)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS result (
    id            INT      NOT NULL AUTO_INCREMENT,
    user_code     CHAR(3)  NOT NULL,
    r_score       INT      NOT NULL DEFAULT 0,
    i_score       INT      NOT NULL DEFAULT 0,
    a_score       INT      NOT NULL DEFAULT 0,
    s_score       INT      NOT NULL DEFAULT 0,
    e_score       INT      NOT NULL DEFAULT 0,
    c_score       INT      NOT NULL DEFAULT 0,
    interest_code CHAR(3)  NOT NULL,
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT pk_result            PRIMARY KEY (id),
    CONSTRAINT uq_result_user_code  UNIQUE      (user_code),
	CONSTRAINT uq_result_created_at UNIQUE      (created_at)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS ufsm_course (
    id      INT          NOT NULL,
    `name`  VARCHAR(255) NOT NULL,
    `site`  VARCHAR(255) NOT NULL,
    `level` VARCHAR(9)   NOT NULL,

    CONSTRAINT pk_ufsm_course          PRIMARY KEY (id),
    CONSTRAINT check_ufsm_course_level CHECK (`level` IN ('Técnico', 'Graduação'))
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS pathway (
    id     INT         NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(63) NOT NULL,

    CONSTRAINT pk_pathway      PRIMARY KEY (id),
    CONSTRAINT uq_pathway_name UNIQUE      (`name`)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS personality_pathway (
    id              INT                 NOT NULL AUTO_INCREMENT,
    personality_id  INT                 NOT NULL,
    pathway_id      INT                 NOT NULL,
    is_main_pathway TINYINT(1) UNSIGNED NOT NULL,
    
    CONSTRAINT pk_personality_pathway                               PRIMARY KEY (id),
    CONSTRAINT fk_personality_pathway_personality                   FOREIGN KEY (personality_id) REFERENCES personality (id),
    CONSTRAINT fk_personality_pathway_pathway                       FOREIGN KEY (pathway_id)     REFERENCES pathway (id),
    CONSTRAINT uq_personality_pathway_personality_id_and_pathway_id UNIQUE      (personality_id, pathway_id)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS personality_pathway_ufsm_course (
    id                     INT NOT NULL AUTO_INCREMENT,
    personality_pathway_id INT NOT NULL,
    ufsm_course_id         INT NOT NULL,
    
    CONSTRAINT pk_personality_pathway_ufsm_course                     PRIMARY KEY (id),
    CONSTRAINT fk_personality_pathway_ufsm_course_personality_pathway FOREIGN KEY (personality_pathway_id) REFERENCES personality_pathway (id),
    CONSTRAINT fk_personality_pathway_ufsm_course_ufsm_course         FOREIGN KEY (ufsm_course_id)         REFERENCES ufsm_course (id),
    CONSTRAINT uq_personality_pathway_ufsm_course_pp_id_and_uc_id     UNIQUE      (personality_pathway_id, ufsm_course_id)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
