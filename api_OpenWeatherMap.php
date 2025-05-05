<?php
require_once('tools.php');

function fetch_and_store_weather($zipCode) {

    $apiKey = "a2344ccdb157cfc507fc6589b8a7893a";
    $countryCode = 'US';
    $baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip={$zipCode},{$countryCode}&appid={$apiKey}&units=imperial";

    // start curl session
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $baseUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'Curl Error: ' . curl_error($ch);
        curl_close($ch);
        return false;
    }

    curl_close($ch);

    $weatherData = json_decode($response, true);

    if (!isset($weatherData['main'])) {
        echo "Error: Unexpected API response.\n";
        return false;
    }

    echo "<pre>{$response}</pre>";

    // data to insert
    $city_name = $weatherData['name'];
    $temperature = $weatherData['main']['temp'];
    $feels_like = $weatherData['main']['feels_like'];
    $temp_min = $weatherData['main']['temp_min'];
    $temp_max = $weatherData['main']['temp_max'];
    $humidity = $weatherData['main']['humidity'];
    $pressure = $weatherData['main']['pressure'];
    $wind_speed = $weatherData['wind']['speed'];
    $wind_deg = $weatherData['wind']['deg'];
    $cloud_coverage = $weatherData['clouds']['all'];
    $weather_main = $weatherData['weather'][0]['main'];
    $weather_description = $weatherData['weather'][0]['description'];
    $icon_code = $weatherData['weather'][0]['icon'];
    $timestamp_utc = gmdate("Y-m-d H:i:s", $weatherData['dt']);

    // fn to insert into DB
    add_weather_data(
        $zipCode, $city_name, $countryCode, $temperature,
        $feels_like, $temp_min, $temp_max, $humidity,
        $pressure, $wind_speed, $wind_deg, $cloud_coverage,
        $weather_main, $weather_description, $icon_code, $timestamp_utc
    );

    echo "Weather data for $zipCode inserted successfully.\n\n\n";
    return true;
}

fetch_and_store_weather('91606');
?>