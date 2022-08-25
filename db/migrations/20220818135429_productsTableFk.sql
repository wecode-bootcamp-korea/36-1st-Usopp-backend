-- migrate:up
ALTER TABLE products ADD CONSTRAINT products_product_image_id_fkey FOREIGN KEY (product_image_id) REFERENCES products_images(id)


-- migrate:down

