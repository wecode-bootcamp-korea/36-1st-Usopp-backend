-- migrate:up
CREATE DATABASE categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    main_categorie_id INT NOT NULL,
    CONSTRAINT categories_main_categories_id_fkey FOREIGN KEY (main_categorie_id) REFERENCES main_categories(id)
)

-- migrate:down