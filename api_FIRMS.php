
<?php

require_once('tools.php');

$apiKey = '8bb5676cb3d5959ba7fcdc0d4bfe7daa';
$source = 'VIIRS_NOAA20_NRT'; 
$coords = '-124.48,32.45,-114.13,42.00';
//$coords = '-118.72,33.70,-118.15,34.34';


$dayRange = '6';
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
    echo "<br><br> FIRMS api response:\n";

    echo "<pre>{$response}</pre>";
}

curl_close($ch);
?>

