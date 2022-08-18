-- migrate:up
CREATE DATABASE aromas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
)
-- migrate:down