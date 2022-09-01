
## Protobuffer/GRPC with GO (modules)  and Make


This as a sample template to generate Go Micro-services. This models a mono-repo style where all micro-services are in a single repository and share a common `interfaces` folder which contains all the interfaces of all micro-services

The `interfaces` folder is kept out so that multiple microservice interfaces can be added in different directories here
and between microservice only interfaces need to be shared.

There is a Go Client, a TypeScript Client here; as well as an Envoy SideCar and Docker files and configurations (Make) to create a Kubernetes deployment for the GRPC server and its Envoy Side Car and access via Go Client (Does not need Envoy Side car for that!) or a Web Client ( via Google GRPC-Web framework of translating to JS client code the GRPC to what browsers can understand  )

Please read also  https://medium.com/techlogs/micro-services-git-d840305e6220 and the manuals for GRPC, GRPC-Web etc

## Structure of this Repo

- Proto files: https://github.com/alexcpn/go_grpc_2022/tree/main/interfaces/microservice_1
- Go-based Server implementation: https://github.com/alexcpn/go_grpc_2022/tree/main/microservice_1/server
- Go-based Client: https://github.com/alexcpn/go_grpc_2022/tree/main/microservice_1/go_client
- Go Server build: https://github.com/alexcpn/go_grpc_2022/blob/main/microservice_1/Makefile

- Kubernetes deployment,Envoy Side Car Configuration, Docker images: https://github.com/alexcpn/go_grpc_2022/tree/main/k8sdeployment/ 

- Standalone TS Client part (GRPC Web): https://github.com/alexcpn/go_grpc_2022/tree/main/microservice_1/ts_client + https://github.com/alexcpn/go_grpc_2022/blob/main/microservice_1/ts_client/src/index.ts

- - The README.md has details of how to generate the Typescript and JavaScript scripts as well as package them in WebPack so that they can be accessed from the HTML (main.js is generated from WebPack)
https://github.com/alexcpn/go_grpc_2022/blob/main/microservice_1/ts_client/dist/index.html
Makefile for the TypeScript generation part:
https://github.com/alexcpn/go_grpc_2022/blob/main/microservice_1/ts_client/Makefile

## To build locally 

In a (linux) machine which has Go installed > 1.17 and  
cd to microservice_x directory and run `make once` to install the protoc compiler related plugins for Go

After that run `make all` for all builds and rebuilds

### To Test

- cd to microservice_x directory
- cd to integration_test  and run 'go test' 

### To run manually

- cd  microservice_x/generated directory
- run server   ./run_server
- run client  ./go_client

To run server in docker

- docker run --rm --name test -p 50051:50051 run_server:1.2


### To build locally without any dependencies

If you just have 'make' installed and don't have any other dependency even Go you can build
the same output in a Docker container
First
 - cd to microservice_x 
 - run 'make docker_image'

## To Deploy in a Kubernetes Cluster

Please see the [k8sdeployment/microserice_1/README.md](k8sdeployment/README.md) 

### To Check how you can write a TypeScript GRPC client and use it directly from a Web Page

See the [microservice_1/ts_client/README.md](microservice_1/ts_client/README.md)

---


