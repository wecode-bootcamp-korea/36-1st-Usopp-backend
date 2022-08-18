-- migrate:up
CREATE DATABASE category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    main_category_id INT NOT NULL,
    CONSTRAINT category_main_category_id_fkey FOREIGN KEY (main_category_id) REFERENCES main_category(id)
)

-- migrate:down