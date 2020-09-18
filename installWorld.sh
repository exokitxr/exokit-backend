#!/bin/bash

PUBLIC_IP=$1
DOMAIN_NAME=$2

scp -o StrictHostKeyChecking=no -i /tmp/keys/server.pem ./world-server.zip ubuntu@$PUBLIC_IP:~

ssh -o StrictHostKeyChecking=no -i /tmp/keys/server.pem ubuntu@$PUBLIC_IP << EOF
    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo setcap 'cap_net_bind_service=+ep' /usr/bin/node
    sudo apt-get update -y
    sudo apt-get install unzip -y
    unzip world-server.zip
    sudo npm i forever -g
    mkdir node_modules/dialog/certs/
    cd ~/node_modules/dialog/
    sudo snap install --classic certbot
    sudo certbot certonly --standalone --non-interactive --agree-tos -m hello@webmr.io -d n1qxqgwbspw.worlds.webaverse.com
    sudo chmod +r /etc/letsencrypt/live/${DOMAIN_NAME}/fullchain.pem
    sudo chmod +r /etc/letsencrypt/live/${DOMAIN_NAME}/privkey.pem
    sudo cp /etc/letsencrypt/live/${DOMAIN_NAME}/fullchain.pem /home/ubuntu/node_modules/dialog/certs/
    sudo cp /etc/letsencrypt/live/${DOMAIN_NAME}/privkey.pem /home/ubuntu/node_modules/dialog/certs/
    sudo chmod +r certs/privkey.pem
    sudo chmod +r certs/fullchain.pem
    MEDIASOUP_LISTEN_IP=54.193.38.54 MEDIASOUP_ANNOUNCED_IP=54.193.38.54 DEBUG=\${DEBUG:='*mediasoup* *INFO* *WARN* *ERROR*'} INTERACTIVE=\${INTERACTIVE:='false'} forever start index.js
    exit
EOF