-- migrate:up
CREATE TABLE products_groups (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
-- migrate:down