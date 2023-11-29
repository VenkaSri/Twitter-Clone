#!/bin/bash

echo tc-test-backend > /tmp/.auth
echo $BUILD_TAG >> /tmp/.auth
echo $PASS >> /tmp/.auth 


scp -i /opt/prod /tmp/.auth prod@$SPRING_SERVER_IP:/tmp/.auth
scp -i /opt/prod ./jenkins/deploy/publish prod@$SPRING_SERVER_IP:/tmp/publish
ssh -i /opt/prod prod@$SPRING_SERVER_IP "~/maven/publish.sh"
