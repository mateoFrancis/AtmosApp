
DROP PROCEDURE IF EXISTS insert_weather_data;

DELIMITER //

CREATE PROCEDURE insert_weather_data (
    IN in_zip_code VARCHAR(15),
    IN in_city_name VARCHAR(100),
    IN in_country_code VARCHAR(10),
    IN in_temperature FLOAT,
    IN in_feels_like FLOAT,
    IN in_temp_min FLOAT,
    IN in_temp_max FLOAT,
    IN in_humidity INT,
    IN in_pressure INT,
    IN in_wind_speed FLOAT,
    IN in_wind_deg INT,
    IN in_cloud_coverage INT,
    IN in_weather_main VARCHAR(50),
    IN in_weather_description VARCHAR(200),
    IN in_icon_code VARCHAR(10),
    IN in_timestamp_utc DATETIME
)
BEGIN
    INSERT INTO Weather_data (
        zip_code,
        city_name,
        country_code,
        temperature,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        pressure,
        wind_speed,
        wind_deg,
        cloud_coverage,
        weather_main,
        weather_description,
        icon_code,
        timestamp_utc
    ) 
    VALUES (
        in_zip_code,
        in_city_name,
        in_country_code,
        in_temperature,
        in_feels_like,
        in_temp_min,
        in_temp_max,
        in_humidity,
        in_pressure,
        in_wind_speed,
        in_wind_deg,
        in_cloud_coverage,
        in_weather_main,
        in_weather_description,
        in_icon_code,
        in_timestamp_utc
    );    
END //




DELIMITER ;
