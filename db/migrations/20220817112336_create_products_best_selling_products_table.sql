-- migrate:up
CREATE DATABASE best_selling_products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    categories_id INT NOT NULL,
    CONSTRAINT best_selling_products_categories_id_fkey FOREIGN KEY (categorie_id) REFERENCES categories(id)
)
-- migrate:down