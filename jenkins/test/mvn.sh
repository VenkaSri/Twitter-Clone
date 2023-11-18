#!/bin/bash

echo "* Testing *"
WORKSPACE=/var/lib/jenkins/workspace/pipeline-backend

docker run --rm -v "$WORKSPACE/java-app":/app -v "/Users/venkateshsritharan/.m2":/root/.m2 -w /app maven:3.9.4-amazoncorretto-17 "$@"


