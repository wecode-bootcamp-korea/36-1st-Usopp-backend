-- migrate:up
CREATE TABLE main_category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
)

-- migrate:down