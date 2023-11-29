#!/bin/bash


echo test-frontend > /tmp/.auth
echo $BUILD_TAG >> /tmp/.auth
echo $PASS >> /tmp/.auth

scp -i /opt/prod /tmp/.auth prod@$REACT_SERVER_IP:/tmp/.auth
scp -i /opt/prod ./jenkins/deploy/publish prod@$REACT_SERVER_IP:/tmp/publish
ssh -i /opt/prod prod@$REACT_SERVER_IP "~/app/publish.sh"
