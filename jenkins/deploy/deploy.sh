#!/bin/bash

echo tc-test-backend > /tmp/.auth
echo $BUILD_TAG >> /tmp/.auth
echo $PASS >> /tmp/.auth 


scp -i /opt/prod /tmp/.auth prod@ec2-34-230-90-152.compute-1.amazonaws.com:/tmp/.auth
scp -i /opt/prod ./jenkins/deploy/publish prod@ec2-34-230-90-152.compute-1.amazonaws.com:/tmp/publish
ssh -i /opt/prod prod@ec2-34-230-90-152.compute-1.amazonaws.com "~/maven/publish.sh"
