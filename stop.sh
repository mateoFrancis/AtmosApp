#!/bin/bash

# Check if the server is running
if pm2 list | grep -q "Atmos-server"; then

    echo "Server is running. Stopping the server..."
    
    # stop the server 
    pm2 stop "Atmos-server"
    pm2 delete "Atmos-server"
    pm2 "save --force"
    
else

    echo "Server is not running."

fi
