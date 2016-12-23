#!/usr/bin/env bash

cd ../

# Install packages
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs nginx

# Set nginx config
sudo cp conf/dowhatdo.nginx /etc/nginx/sites-available/dowhatdo.conf
sudo ln -s /etc/nginx/sites-available/dowhatdo.conf /etc/nginx/sites-enabled/dowhatdo.conf
sudo service nginx reload

# Set npm global config
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo "PATH=~/.npm-global/bin:$PATH" >> ~/.profile
source ~/.profile

# Install process manager
npm install -g pm2

# Build
set NODE_ENV=production
npm install
npm run build-client
npm run build-server
