-- migrate:up
CREATE TABLE shipments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(100) NOT NULL,
    tracking_number VARCHAR(100) NOT NULL
);
-- migrate:down