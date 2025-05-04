<?php 
//require_once("config.php");

$servername = "localhost";                                                      
$username = "Francis";
$password = "Francis";
$dbname = "Atmos";


function getConnection() {

    $mysqli = mysqli_connect(
       $GLOBALS[ 'servername'],
       $GLOBALS[ 'username'],
       $GLOBALS[ 'password'],
       $GLOBALS[ 'dbname']
    );

    if (!$mysqli) {
        die("Connection failed: " . mysqli_connect_error());
    }

    return $mysqli;
}

function closeConnection($conn) {

    if(mysqli_close($conn)) {

        return true;
    }
    else {
        die();
    }
}

/*
add_weather_data(
    '90210', 'Los Angeles', 'US', 75.3,
    74.0, 70.0, 80.0, 60,
    1012, 5.5, 180, 20,
    'Clear', 'clear sky', '01d', '2024-05-12 15:00:00'
);
*/

function add_weather_data(
    $zip_code, $city_name, $country_code, $temperature,
    $feels_like, $temp_min, $temp_max, $humidity,
    $pressure, $wind_speed, $wind_deg, $cloud_coverage,
    $weather_main, $weather_description, $icon_code, $timestamp_utc
) {

    $db = getConnection();

    //$hpassword = password_hash($password, PASSWORD_DEFAULT);
    
    $sql = "CALL add_weather_data(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = mysqli_prepare($db, $sql);
    
   mysqli_stmt_bind_param(
        $stmt, 
        'ssssddddiiidssss',
        $zip_code, $city_name, $country_code, $temperature, 
        $feels_like, $temp_min, $temp_max, $humidity, 
        $pressure, $wind_speed, $wind_deg, $cloud_coverage, 
        $weather_main, $weather_description, $icon_code, $timestamp_utc
    );

    mysqli_stmt_execute($stmt);

    mysqli_stmt_close($stmt);

    closeConnection($db);
}

?>