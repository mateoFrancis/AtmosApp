<?php 
ob_start();
   require('tools.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="./style.css">
        <script src="script.js"></script>
        <link rel="icon" type="image/x-icon" href="./images/favicon02.jpg">
        <title id="font">ATMOS</title>
        <!-- Initializes google maps javascript API -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARVBJUMdn8K-mZWJrbbVHgtMEnd30kitg&libraries=marker&callback=initMap" async defer></script>
    </head>
    
    <body>
        <div id="logo">
            <p>Atmos</p> 
        </div>

        <div id="sidebar">
            <a href="./index.html">Home <img src="images/home.png" alt="icon" width="20" height="20"></a>
            <a href="https://www.abc10.com/article/news/local/wildfire/california-firefighters-urge-preparedness-wildfire-season-nears/103-a3a8008f-a452-4fad-941c-6b77be4cbcfb">News <img src="images/news.png" alt="icon" width="20" height="20"></a>
            <a href="https://readyforwildfire.org/prepare-for-wildfire/go-evacuation-guide/">Help & Resources <img src="images/help.png" alt="icon" width="20" height="20"></a>
        </div>
        
        <div id="content">
            <div style="margin-top: 30px;" id="map"></div>

            <div style="margin-top: 30px;" id="legend">
                <center> 
                    <img src="./fire_imgs/RedFire.png" class="fire-icon">
                    <img src="./fire_imgs/OrangeFire.png" class="fire-icon">
                    <img src="./fire_imgs/GreenFire.png" class="fire-icon">
                </center>
            </div>

            <div id="live">
    <form  id="select" method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="zip">Zip code:</label>
        <select id="zip" name="zip">
            <?php
            foreach ($zip_keys as $zip) {

                $selectedZip = (isset($_POST['zip']) && $_POST['zip'] == $zip) ? 'selected' : '';
                echo "<option value='$zip' $selectedZip>$zip</option>";
            }
            ?>
        </select>

        <label for="days">Fire Data Range (days)</label>
        <select id="days" name="days">
            <?php
            for ($i = 1; $i <= 10; $i++) {

                $selectedDay = (isset($_POST['days']) && $_POST['days'] == $i) ? 'selected' : '';
                echo "<option value='$i' $selectedDay>$i</option>";
            }
            ?>
        </select>

        <input id="button" type="submit" value="Submit">
    </form>
</div>




        
        <?php
            if (isset($LA_fires) && !empty($LA_fires)) {

                echo "<script>";
                foreach ($LA_fires as $index => $fire) {
                    $latitude = $fire[0];
                    $longitude = $fire[1];
                    $bright = $fire[2];
                    $time = $fire[3];
                    $days = $fire[4]; 
                
                    echo "addPin($latitude, $longitude, $bright, '$time', $days);";
                }

                echo "</script>";
            }
        ?>

        <br><br><br><br>
        <div class="table-wrapper" style="margin-top: 100px; padding-bottom: 40px; text-align: center;">
            <table class="myOtherTable" style="margin: 0 auto;"> 
                <!-- Header Row -->
                <tr>
                    <th>Zip Code</th>
                    <th>City/Neighborhood</th>
                    <th>Timestamp</th>
                    <th>Weather</th>
                </tr>
                <!-- Row 1 -->
                <tr>
                    <td><?php echo isset($weather_data['zip_code']) ? $weather_data['zip_code'] : 'N/A'; ?></td>
                    <td><?php echo isset($weather_data['name']) ? $weather_data['name'] : 'N/A'; ?></td>
                    <td><?php echo isset($weather_data['timestamp_utc']) ? $weather_data['timestamp_utc'] : 'N/A'; ?></td>
                    <td><?php echo isset($weather_data['weather_main']) ? $weather_data['weather_main'] : 'N/A'; ?></td>
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
                    <td><?php echo isset($weather_data['temperature']) ? $weather_data['temperature'] : 'N/A'; ?></td>
                    <td><?php echo isset($weather_data['temp_min']) ? $weather_data['temp_min'] : 'N/A'; ?></td>
                    <td><?php echo isset($weather_data['temp_max']) ? $weather_data['temp_max'] : 'N/A'; ?></td>
                    <td><?php echo isset($weather_data['humidity']) ? $weather_data['humidity'] : 'N/A'; ?></td>
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
                    <td><?php echo isset($weather_data['wind_speed']) ? $weather_data['wind_speed'] : 'N/A'; ?></td>
                    <td><?php echo isset($weather_data['wind_deg']) ? $weather_data['wind_deg'] : 'N/A'; ?></td>
                    <td><?php echo isset($weather_data['cloud_coverage']) ? $weather_data['cloud_coverage'] : 'N/A'; ?></td>
                    <td><?php echo isset($weather_data['weather_description']) ? $weather_data['weather_description'] : 'N/A'; ?></td>
                </tr>
            </table>
        </div>
        <br><br><br><br><br><br>
    </body>
</html>