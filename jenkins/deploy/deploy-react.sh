#!/bin/bash
WORKSPACE=/var/lib/jenkins/workspace/pipeline-backend
aws s3 cp $WORKSPACE/twitter-clone-front-end/dist/index.html s3://tc-frontend-test/index.html
aws s3 cp $WORKSPACE/twitter-clone-front-end/dist/vite.svg s3://tc-frontend-test/vite.svg
aws s3 cp $WORKSPACE/twitter-clone-front-end/dist/assets/ s3://tc-frontend-test/assets/ --recursive
