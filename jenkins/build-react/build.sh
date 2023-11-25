#!/bin/bash
WORKSPACE=/var/lib/jenkins/workspace/pipeline-backend

docker buildx create --name mybuilder --use
docker buildx inspect --bootstrap



docker buildx build --platform linux/arm64 -t test-frontend:$BUILD_TAG -f jenkins/build-react/Dockerfile .


