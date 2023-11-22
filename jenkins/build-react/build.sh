#!/bin/bash
WORKSPACE=/var/lib/jenkins/workspace/pipeline-backend
cd "$WORKSPACE/twitter-clone-front-end" && yarn install && yarn cache clean && yarn build

