-- migrate:up
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    orders_name VARCHAR(200) NOT NULL,
    user_id INT NOT NULL,
    order_status INT NOT NULL,
    ordered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
-- migrate:down
