-- migrate:up
CREATE TABLE orders_items_status (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(100) NOT NULL
);
-- migrate:down