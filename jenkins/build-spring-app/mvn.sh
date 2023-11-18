#!/bin/bash

echo "***********************************"
echo "******** Building Jar *************"
echo "***********************************"
WORKSPACE=/var/lib/jenkins/workspace/pipeline-backend

docker run --rm -v "$WORKSPACE/twitter-clone-back-end":/app -v "/Users/venkateshsritharan/.m2":/root/.m2 -w /app maven:3.9.4-amazoncorretto-17 "$@"


