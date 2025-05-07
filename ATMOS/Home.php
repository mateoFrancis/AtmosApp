<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="./style.css">
        <script src = "script.js"></script>
        <link rel ="icon" type="image/x-icon" href="./images/favicon02.jpg">

        <title id="font">ATMOS</title>
        <!-- Initializes google maps javascript API -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARVBJUMdn8K-mZWJrbbVHgtMEnd30kitg&libraries=marker"></script>
    </head>
    
    <body onload="initMap();">

        <div id = 'logo'>
            <p>Atmos</p> 
        </div>
        <br><br><br><br><br><br>

        <!-- <div id = 'animation'>  </div> -->

        <div id = 'sidebar' >
            
                <br>
            <a href ="https://www.google.com/">News <img src="images/news.png" style="width:20px; height:20px;" alt="icon"> </a>
            
            <a href ="https://www.google.com/">Help & Resources <img src="images/help.png" style="width:20px; height:20px;" alt="icon"></a>
            
            <!-- <a href ="https://www.google.com/">Log-In <img src="images/log in.png" style="width:20px; height:20px;" alt="icon"></a> -->
            
            <a href ="https://www.google.com/">Home <img src="images/home.png" style="width:20px; height:20px;" alt="icon"></a>
            </div>
        

        
        <div id="content">

        <div id = "map"></div>

        <div id = "legend">
            <div id = "legendTop">Map Legend
                <p  id= "legendTextTop">Minor</p>
            </div>
            <center> 
            <img src="images/green.png" style="width:5vw;height:7vh;margin-top:10vh;"> 
            <!--<img src="images/blue.png" style="width:3vw;height:5vh;margin-top: 5vh"> -->
           <!-- <img src="images/yellow.png" style="width:5vw;height:7vh;margin-top: 10vh"> -->
            <img src="images/orange.png" style="width:5vw;height:7vh;margin-top: 10vh"> 
            <img src="images/red.png" style="width:5vw;height:7vh;margin-top: 10vh"> 
            <p style ="font-family: Georgia, 'Times New Roman', Times, serif;" >Major</p>
            </center>
        </div>

        <div id = "live"> Reports: </div>


        <form id="select" method="post">
            <label for="zip">Zip code:</label>
            <select id="zip" name="zip">
                <?php foreach ($zipCodes as $zip): ?>
                    <option value="<?php echo htmlspecialchars($zip); ?>"><?php echo htmlspecialchars($zip); ?></option>
                <?php endforeach; ?>
            </select>
        
            <label for="days">Fire Data Range (days)</label>
            <select id="days" name="days">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </form>


    </div>

    <div style="margin-bottom: 10vh;">
        <table id = 'fireTable'>
            <tr>
                <th>ID</th>
                <th>ZIP</th>
                <th>Time</th>
                <th>Severity</th>
                <th>Temp</th>
                <th>Humidity</th>
                <th>Wind speed/degree</th>
                <th>Weather</th>
            </tr>

        </table>
    </div>


    </body>