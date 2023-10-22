#!/bin/bash

sudo yum update -y
sudo yum install -y nginx
echo "subnet = ${subnet}" > /usr/share/nginx/html/index.html
echo "Hello from ${az}" >> /usr/share/nginx/html/index.html
sudo systemctl restart nginx
sudo systemctl enable nginx
