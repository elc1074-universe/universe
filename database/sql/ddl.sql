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

    PRIMARY KEY (id),
    UNIQUE      (code),
    UNIQUE      (created_at)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS personality (
    id                INT          NOT NULL,
    letter            CHAR(1)      NOT NULL,
    `name`            VARCHAR(15)  NOT NULL,
    `description`     VARCHAR(255) NOT NULL,
    story_title       VARCHAR(63)  NOT NULL,
    story_description VARCHAR(511) NOT NULL,

    PRIMARY KEY (id),
    UNIQUE      (letter),
    UNIQUE      (`name`),
    UNIQUE      (`description`),
    UNIQUE      (story_title),
    UNIQUE      (story_description)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `statement` (
    id             INT          NOT NULL,
    riasec_title   VARCHAR(63)  NOT NULL,
    story_title    VARCHAR(63)  NOT NULL,
    story_text     VARCHAR(511) NOT NULL,
    personality_id INT          NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (personality_id) REFERENCES personality (id),
    UNIQUE      (riasec_title)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `option` (
    id            INT                 NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(511)        NOT NULL,
    `value`       TINYINT(1) UNSIGNED NOT NULL,
    statement_id  INT                 NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (statement_id) REFERENCES `statement` (id),
    UNIQUE      (`description`)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS test (
    id         INT      NOT NULL AUTO_INCREMENT,
    user_id    INT      NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user (id),
    UNIQUE      (user_id),
	UNIQUE      (created_at)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS test_statement (
    id                 INT NOT NULL AUTO_INCREMENT,
    test_id            INT NOT NULL,
    statement_id       INT NOT NULL,
    selected_option_id INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (test_id)            REFERENCES test (id),
    FOREIGN KEY (statement_id)       REFERENCES `statement` (id),
    FOREIGN KEY (selected_option_id) REFERENCES `option` (id),
    UNIQUE      (test_id, statement_id)
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

    PRIMARY KEY (id),
    UNIQUE      (user_code),
	UNIQUE      (created_at)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS ufsm_course (
    id     INT          NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `site` VARCHAR(255) NOT NULL,

    PRIMARY KEY (id),
    UNIQUE      (`name`)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS pathway (
    id     INT         NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(63) NOT NULL,

    PRIMARY KEY (id),
    UNIQUE      (`name`)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS personality_pathway (
    id              INT                 NOT NULL AUTO_INCREMENT,
    personality_id  INT                 NOT NULL,
    pathway_id      INT                 NOT NULL,
    is_main_pathway TINYINT(1) UNSIGNED NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (personality_id) REFERENCES personality (id),
    FOREIGN KEY (pathway_id)     REFERENCES pathway (id),
    UNIQUE      (personality_id, pathway_id)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS personality_pathway_ufsm_course (
    id                     INT NOT NULL AUTO_INCREMENT,
    personality_pathway_id INT NOT NULL,
    ufsm_course_id         INT NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (personality_pathway_id) REFERENCES personality_pathway (id),
    FOREIGN KEY (ufsm_course_id)         REFERENCES ufsm_course (id),
    UNIQUE      (personality_pathway_id, ufsm_course_id)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
