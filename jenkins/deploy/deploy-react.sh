#!/bin/bash


echo test-frontend > /tmp/.auth
echo $BUILD_TAG >> /tmp/.auth
echo $PASS >> /tmp/.auth

scp -i /opt/prod /tmp/.auth prod@ec2-18-222-5-209.us-east-2.compute.amazonaws.com:/tmp/.auth
scp -i /opt/prod ./jenkins/deploy/publish prod@ec2-18-222-5-209.us-east-2.compute.amazonaws.com:/tmp/publish
ssh -i /opt/prod prod@ec2-18-222-5-209.us-east-2.compute.amazonaws.com "~/app/publish.sh"
