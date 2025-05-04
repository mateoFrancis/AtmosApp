
<?php

$apiKey = '8bb5676cb3d5959ba7fcdc0d4bfe7daa';
$source = 'VIIRS_NOAA20_NRT'; 
$coords = '-118.27,33.96,-118.23,33.99';
//$coords = '54,5.5,102,40';

$dayRange = '10';
$url = "https://firms.modaps.eosdis.nasa.gov/api/area/csv/{$apiKey}/{$source}/{$coords}/{$dayRange}";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if (curl_errno($ch)) {

    echo 'Curl error: ' . curl_error($ch);
} 
else {
    // output response
    echo "FIRMS api response:\n";

    echo "<pre>{$response}</pre>";
}

curl_close($ch);
?>

