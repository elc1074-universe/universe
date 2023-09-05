/* universe-logico: */

CREATE TABLE Question (
    description VARCHAR(127),
    anwser ?,
    id INTEGER PRIMARY KEY
);

CREATE TABLE User (
    id INTEGER PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(127)
);

CREATE TABLE Game (
    id INTEGER PRIMARY KEY,
    timestamp TIMESTAMP,
    fk_User_id INTEGER
);

CREATE TABLE Game_Question (
    fk_Question_id INTEGER,
    fk_Game_id INTEGER
);
 
ALTER TABLE Game ADD CONSTRAINT FK_Game_2
    FOREIGN KEY (fk_User_id)
    REFERENCES User (id)
    ON DELETE CASCADE;
 
ALTER TABLE Game_Question ADD CONSTRAINT FK_Game_Question_1
    FOREIGN KEY (fk_Question_id)
    REFERENCES Question (id)
    ON DELETE RESTRICT;
 
ALTER TABLE Game_Question ADD CONSTRAINT FK_Game_Question_2
    FOREIGN KEY (fk_Game_id)
    REFERENCES Game (id)
    ON DELETE SET NULL;