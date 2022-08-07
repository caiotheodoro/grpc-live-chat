#!/bin/bash

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ proto/*.proto

mkdir -p ./src/proto
protoc -I=. ./src/proto/random.proto \
  --js_out=import_style=commonjs:./src \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src