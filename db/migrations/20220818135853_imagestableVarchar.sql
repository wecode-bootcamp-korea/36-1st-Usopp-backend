-- migrate:up
ALTER TABLE products_images MODIFY url VARCHAR(1000)

-- migrate:down

