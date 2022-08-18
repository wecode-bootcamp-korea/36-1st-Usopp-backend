-- migrate:up
CREATE DATABASE products_images (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(50) NOT NULL,
    product_id int NOT NULL,
    CONSTRAINT products_products_images_id_fkey FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
)
-- migrate:down