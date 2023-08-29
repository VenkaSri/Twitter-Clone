#!/bin/bash

cp -r  -f Twitter-Clone/twitter-clone-front-end/build jenkins/build/

echo "*** Building Docker Image ***"

cd jenkins/build/ && docker-compose -f docker-compose-build.yml build --no-cache 
