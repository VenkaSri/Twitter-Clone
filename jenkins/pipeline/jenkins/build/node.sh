#!/bin/bash

echo "*** Building ***"

project_directory="$PWD/Twitter-Clone/twitter-clone-front-end"

# Loop through all arguments and run them
for cmd in "$@"; do
  echo "Running $cmd..."
  docker run --rm -v "$project_directory":/app -w /app node:latest $cmd
done

