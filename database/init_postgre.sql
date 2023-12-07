CREATE TABLE "users"
(
    id        SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname  VARCHAR(255) NOT NULL,
    email     VARCHAR(255) NOT NULL
);
INSERT INTO "users" (firstname, lastname, email)
VALUES ('john', 'doe', 'john.doe@giftplanner.com');
