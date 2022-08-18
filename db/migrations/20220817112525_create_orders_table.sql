-- migrate:up
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_name VARCHAR(200) NOT NULL,
    user_id INT NOT NULL,
    order_status_id INT NOT NULL,
    ordered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    CONSTRAINT orders_orders_status_id_fkey FOREIGN KEY (order_status_id) REFERENCES orders_status(id) ON DELETE CASCADE
);
-- migrate:down
