-- migrate:up
CREATE TABLE best_selling_products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    category_id INT NOT NULL,
    CONSTRAINT best_selling_products_category_id_fkey FOREIGN KEY (category_id) REFERENCES category(id)
)
-- migrate:down