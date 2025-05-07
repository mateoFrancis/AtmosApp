<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="./style.css">
        <script src = "/script.js"></script>
        <link rel ="icon" type="image/x-icon" href="./images/favicon02.jpg">

        <title id="font">ATMOS</title>
        <!-- Initializes google maps javascript API -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARVBJUMdn8K-mZWJrbbVHgtMEnd30kitg&libraries=marker"></script>
    </head>
    
    <body onload="initMap(); test_marker();">

        <div id = 'logo'>
            <p>Atmos</p> 
        </div>
        <br><br><br><br><br><br>

        <!-- <div id = 'animation'>  </div> -->

        <div id="sidebar">
            <a href="./index.html">Home <img src="images/home.png" alt="icon" width="20" height="20"></a>
            <a href="https://www.google.com/">News <img src="images/news.png" alt="icon" width="20" height="20"></a>
            <a href="https://readyforwildfire.org/prepare-for-wildfire/go-evacuation-guide/">Help & Resources <img src="images/help.png" alt="icon" width="20" height="20"></a>
        </div>
        
        <div id="content">

        <div id = "map"></div>

        <div id="legend">
            <center> 
                <img src="./fire_imgs/RedFire.png" class="fire-icon">
                <img src="./fire_imgs/OrangeFire.png" class="fire-icon">
                <img src="./fire_imgs/GreenFire.png" class="fire-icon">
            </center>
        </div>
        

        <div id = "live"> Reports: </div>






    </div>

    <div class="table-wrapper">
    <table class="myOtherTable">
        <!-- Header Row -->
        <tr>
            <th>Zip Code</th>
            <th>City</th>
            <th>Timestamp</th>
            <th>Weather</th>
        </tr>
        <!-- Row 1 -->
        <tr>
            <td id="zip_code">Placeholder for Zip Code</td>
            <td id="city_name">Placeholder for City</td>
            <td id="timestamp_utc">Placeholder for Timestamp</td>
            <td id="weather_main">Placeholder for Weather Main</td>
        </tr>

        <!-- Header Row -->
        <tr>
            <th>Temperature</th>
            <th>Min Temp</th>
            <th>Max Temp</th>
            <th>Humidity</th>
        </tr>
        <!-- Row 2 -->
        <tr>
            <td id="temperature">Placeholder for Temperature</td>
            <td id="temp_min">Placeholder for Min Temp</td>
            <td id="temp_max">Placeholder for Max Temp</td>
            <td id="humidity">Placeholder for Humidity</td>
        </tr>

        <!-- Header Row -->
        <tr>
            <th>Wind Speed</th>
            <th>Wind Direction</th>
            <th>Cloud Coverage</th>
            <th>Weather Description</th>
        </tr>
        <!-- Row 3 -->
        <tr>
            <td id="wind_speed">Placeholder for Wind Speed</td>
            <td id="wind_deg">Placeholder for Wind Direction</td>
            <td id="cloud_coverage">Placeholder for Cloud Coverage</td>
            <td id="weather_description">Placeholder for Weather Description</td>
        </tr>
    </table>
</div>



    </body>