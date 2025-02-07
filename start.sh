#!/bin/bash

# start the server
if ! pm2 list | grep -q "Atmos-server"; then

    echo "Starting the server..."
    
    php_file="index.php"
    pm2 start "php -S localhost:8000" --name "Atmos-server"  # start with pm2

    sleep 2 

    # open server url on localhost:8000
    explorer.exe "http://localhost:8000/$php_file"
    pm2 save 

else

    echo "Restarting server..."
    pm2 restart "Atmos-server" || echo "Failed to restart Atmos-server"
    pm2 save
    explorer.exe "http://localhost:8000/$php_file"

fi
