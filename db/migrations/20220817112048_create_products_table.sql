-- migrate:up
CREATE DATABASE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(3000) NOT NULL,
    price DECIMAL NOT NULL,
    size INT NOT NULL,
    ingredient VARCHAR(300) NOT NULL,
    detailed_ingredients VARCHAR(3000) NOT NULL,
    type VARCHAR(300) NOT NULL,
    categorie_id INT NOT NULL,
    CONSTRAINT products_categories_id_fkey FOREIGN KEY (categorie_id) REFERENCES categories(id)
)
-- migrate:down
