
DROP TABLE IF EXISTS Weather_data;

-- OpenWeatherMap table

CREATE TABLE Weather_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    zip_code VARCHAR(10),
    city_name VARCHAR(100),
    country_code VARCHAR(10),
    
    temperature FLOAT,
    feels_like FLOAT,
    temp_min FLOAT,
    temp_max FLOAT,
    humidity INT,
    pressure INT,
    wind_speed FLOAT,
    wind_deg INT,
    cloud_coverage INT,
    weather_main VARCHAR(50),
    weather_description VARCHAR(100),
    icon_code VARCHAR(10),
    
    timestamp_utc DATETIME,
    retrieved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
