-- migrate:up
CREATE TABLE products_images (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(1000) NOT NULL
)
-- migrate:down