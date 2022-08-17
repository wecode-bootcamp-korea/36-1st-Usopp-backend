-- migrate:up
CREATE TABLE orders_items (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    price DECIMAL NOT NULL,
    quantity INT NOT NULL,
    orders_items_status INT NOT NULL,
    shipment_id INT NOT NULL,
    CONSTRAINT orders_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    CONSTRAINT orders_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    CONSTRAINT orders_items_shipment_id_fkey FOREIGN KEY (shipment_id) REFERENCES shipments(id)
);
-- migrate:down