#!/bin/bash

echo "** Pushing images **"


IMAGE="test-frontend"


docker login -u venka27 -p $PASS

docker tag $IMAGE:$BUILD_TAG venka27/$IMAGE:$BUILD_TAG
docker push venka27/$IMAGE:$BUILD_TAG
