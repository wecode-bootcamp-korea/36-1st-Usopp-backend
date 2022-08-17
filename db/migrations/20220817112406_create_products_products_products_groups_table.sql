-- migrate:up
CREATE TABLE products_products_groups (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    product_group_id INT NOT NULL,
    CONSTRAINT products_products_groups_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id),
    CONSTRAINT products_products_groups_product_group_id_fkey FOREIGN KEY (product_group_id) REFERENCES products_groups(id)
);
-- migrate:down