<?php

// set up api components
$apiKey = 'a2344ccdb157cfc507fc6589b8a7893a';
$zipCode = '90001'; // LA zip code
$countryCode = 'US';
$baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip={$zipCode},{$countryCode}&appid={$apiKey}&units=imperial"; // Get weather in Fahrenheit

// start curl session
$ch = curl_init();

// set curl
curl_setopt($ch, CURLOPT_URL, $baseUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // Return response as a string

$response = curl_exec($ch);


if(curl_errno($ch)) {

    echo 'Error:' . curl_error($ch);
} 
else {

    // turn json response into an k&v array
    $weatherData = json_decode($response, true);
    
    // echo data 
    echo "<pre>";
    print_r($weatherData);
    echo "</pre>";
}

// end curl session
curl_close($ch);

?>
