#!/bin/bash

echo "* Testing *"


docker run --rm -v "$PWD/java-app":/app -v "/Users/venkateshsritharan/.m2":/root/.m2 -w /app maven:3.9.4-amazoncorretto-17 "$@"


