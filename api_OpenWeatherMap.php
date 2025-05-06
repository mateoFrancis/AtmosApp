<?php
require_once('tools.php');

$weather_data = array();


function fetch_and_store_weather($zipCode) {
    global $weather_data;

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

    // store is array
    $weather_data = array(
        'zip_code' => $zipCode,
        'city_name' => $weatherData['name'],
        'temperature' => $weatherData['main']['temp'],
        'temp_min' => $weatherData['main']['temp_min'],
        'temp_max' => $weatherData['main']['temp_max'],
        'humidity' => $weatherData['main']['humidity'],
        'wind_speed' => $weatherData['wind']['speed'],
        'wind_deg' => $weatherData['wind']['deg'],
        'cloud_coverage' => $weatherData['clouds']['all'],
        'weather_main' => $weatherData['weather'][0]['main'],
        'weather_description' => $weatherData['weather'][0]['description'],
        'timestamp_utc' => gmdate("Y-m-d H:i:s", $weatherData['dt'])
    );

    echo "Weather data for $zipCode fetched and stored in array successfully.\n\n";
    
    echo "<pre>";
    print_r($weather_data);
    echo "</pre>";

    return true;
}

fetch_and_store_weather("90001");

?>