#!/usr/bin/env bash
printf "\nLoad pip and fabric\n"
apt-get update
apt-get install -y python-pip python-dev build-essential 
pip install --upgrade pip
/usr/local/bin/pip install fabric
printf "\ndone\n"