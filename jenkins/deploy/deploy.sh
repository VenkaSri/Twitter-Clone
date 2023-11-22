#!/bin/bash

echo tc-test-backend > /tmp/.auth
echo $BUILD_TAG >> /tmp/.auth
echo $PASS >> /tmp/.auth 


scp -i /opt/prod /tmp/.auth prod@ec2-3-22-58-36.us-east-2.compute.amazonaws.com:/tmp/.auth
scp -i /opt/prod ./jenkins/deploy/publish prod@ec2-3-22-58-36.us-east-2.compute.amazonaws.com:/tmp/publish
ssh -i /opt/prod prod@ec2-3-22-58-36.us-east-2.compute.amazonaws.com "~/maven/publish.sh"
