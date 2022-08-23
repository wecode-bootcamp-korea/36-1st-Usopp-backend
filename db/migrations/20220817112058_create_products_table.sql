-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(3000) NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    size INT NOT NULL,
    ingredient VARCHAR(300) NOT NULL,
    detailed_ingredient VARCHAR(3000) NOT NULL,
    type VARCHAR(300) NOT NULL,
    category_id INT NOT NULL,
    product_image_id INT NOT NULL,
    CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES category(id),
    CONSTRAINT products_products_images_id_fkey FOREIGN KEY (product_image_id) REFERENCES products_images(id) ON DELETE CASCADE
) 
-- migrate:down