# A TypeScript client for GRPC Server

The application is structured to work with webpack without config files

## Prerequisite:
- sudo apt install npm
- Compile and run the GRPC server (run_server folder)- see the Parent README

## To compile Typescript Client

Run `make once` to install dependencies like grpc-web and webpack related libraries

Run `make all` to compile .TS and Protobuffer related files  and package the resultant JS

For accessing GRPC through a browser we need an Envoy Proxy running. For that

## To build Envoy Docker image with configration for our GRPC Server

Run `make enovy_docker`

After the image is build run the envoy proxy

`docker run --name=envoy --rm   --net=host  envoy_run_server:1`

## To Run the client

You can open the dist\index.html in a browser; But browsers do not allow loading local Javascript files. You can use this chrome plugin https://chrome.google.com/webstore/detail/web-server-for-chrome/

and give the path to ./dist folder to load the index.html

You can see output in Chrome Console for the Console.log outputs

![Ouput](https://i.imgur.com/WqcFiCS.png)



