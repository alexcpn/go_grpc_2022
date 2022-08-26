# A TypeScript client for GRPC Server

The application is structured to work with webpack without config files

## Pre-requisite:

- sudo apt install npm
- Compile and run the GRPC server (run_server folder)- see the Parent README

## To compile Typescript Client

Run `make once` to install dependencies like grpc-web and webpack related libraries

Run `make all` to compile .TS and Proto-buffer related files  and package the resultant JS

For accessing GRPC through a browser we need an Envoy Proxy running. For that

## To build Envoy Docker image with configuration for our GRPC Server

Run `make enovy_docker`

After the image is build run the envoy proxy

`docker run --name=envoy --rm   --net=host  envoy_run_server:1`

## To Run the client

Pre-requisite is that the Server is running  as  a Pod in a Kubernetes (Kind Cluster) with Envoy Side car. How this is done please see [README.md](../../README.md) in ../../README.md


You can open the [dist/index.html](dist/index.html) in a browser. 

**NOTE** Browsers do not allow loading local Javascript files. So you need to serve with a webserver.

You can use this chrome plugin https://chrome.google.com/webstore/detail/web-server-for-chrome/ and give the path to ./dist folder to load the index.html

You can see output in Chrome Console for the Console.log outputs

![Ouput](https://i.imgur.com/WqcFiCS.png)



