<?php

$LA_fires = []; // global array of fire records

function fetchFIRMSData($daysRange) {
    global $LA_fires;

    $apiKey = '8bb5676cb3d5959ba7fcdc0d4bfe7daa';
    $source = 'VIIRS_NOAA20_NRT';
    //$coords = '-124.48,32.45,-114.13,42.00'; // Covers all of California  
    $coords = '-118.72,33.70,-118.15,34.34';

    $url = "https://firms.modaps.eosdis.nasa.gov/api/area/csv/{$apiKey}/{$source}/{$coords}/{$daysRange}";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'Curl error: ' . curl_error($ch);
        curl_close($ch);
        return;
    }

    curl_close($ch);

    $lines = explode("\n", trim($response));
    $headers = str_getcsv(array_shift($lines)); 

    foreach ($lines as $line) {

        $data = str_getcsv($line);
        if (count($data) < 14) continue; 

        $latitude = (float) $data[0];
        $longitude = (float) $data[1];
        $bright_ti4_kelvin = (float) $data[2]; 

        $acq_date = $data[5];
        $acq_time = str_pad($data[6], 4, '0', STR_PAD_LEFT); 

        $utcTime = DateTime::createFromFormat(
            'Y-m-d H:i',
            "$acq_date " . substr($acq_time, 0, 2) . ':' . substr($acq_time, 2, 2),
            new DateTimeZone('UTC')
        );

        $utcTime->setTimezone(new DateTimeZone('America/Los_Angeles'));
        $pstTimeFormatted = $utcTime->format('Y-m-d h:i A T');

        // store: latitude, longitude, brightness (K), time (PST)
        $LA_fires[] = [
            $latitude,
            $longitude,
            $bright_ti4_kelvin,
            $pstTimeFormatted
        ];
    }
}

$days = 7;
fetchFIRMSData($days);

// print array
foreach ($LA_fires as $index => $fire) {
    echo "Fire #$index\n";
    echo "Latitude: {$fire[0]}\n";
    echo "Longitude: {$fire[1]}\n";
    echo "Brightness (K): {$fire[2]}\n";
    echo "Time (PST): {$fire[3]}\n";
    echo "---------------------------\n";
}
?>
