-- migrate:up
CREATE TABLE products_aromas(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    aroma_id INT NOT NULL,
    CONSTRAINT products_aromas_products_id_fkey FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    CONSTRAINT products_aromas_aromas_id_fkey FOREIGN KEY (aroma_id) REFERENCES aromas(id)
)
-- migrate:down