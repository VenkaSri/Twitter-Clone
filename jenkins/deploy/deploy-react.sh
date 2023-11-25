#!/bin/bash


echo test-frontend > /tmp/.auth
echo $BUILD_TAG >> /tmp/.auth
echo $PASS >> /tmp/.auth


ssh -i /opt/prod prod@ec2-18-117-92-110.us-east-2.compute.amazonaws.com "~/app/publish.sh"
