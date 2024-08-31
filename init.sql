
CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_code VARCHAR(255) NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS measurements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER,
    measure_datetime DATETIME,
    measure_type VARCHAR(50),
    measure_value INTEGER,
    measure_uuid VARCHAR(255) UNIQUE,
    image_url VARCHAR(255),
    has_confirmed BOOLEAN DEFAULT 0,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
