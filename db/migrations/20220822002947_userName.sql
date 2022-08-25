-- migrate:up
ALTER TABLE users DROP name;
ALTER TABLE users ADD first_name VARCHAR(30) NOT NULL;
ALTER TABLE users ADD last_name VARCHAR(30) NOT NULL;

-- migrate:down

