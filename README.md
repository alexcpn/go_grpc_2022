
## Protobuffer/GRPC with GO (modules)  and Make


This as a sample template to generate Go Micro-services. This models a mono-repo style where all microservices are in a single repository and share a common `interfaces` folder which contains all the interfaces of all microservices

The `interfaces` folder is kept out so that multiple microservice interfaces can be added in different directories here
and between microservice only interfaces need to be shared

See also https://medium.com/techlogs/micro-services-git-d840305e6220

## To build locally 

In a (linux) machine wich has Go installed > 1.12 and  
cd to microservice_x directory and run `make once` to install the protoc compiler related plugins for Go

After that run `make all` for all builds and rebuilds

### To Test


- cd to microservice_x directory
- cd to integration_test  and run 'go test' 

### To run manually

- cd to microservice_x directory
- cd to test_server and run the generated ./test_server
- cd to test_client and run the generated ./test_client

### To build locally without any dependencies

If you just have 'make' installed and don't have any other dependency even Go you can build
the same output in a Docker container
First
 - cd to microservice_x 
 - run 'make make_in_docker_with_vol_map'

(note - some file permission changes after this)

## To build in Windows
From Windows 10 onwards has docker support. You can install 'make' via Cholclatey
(https://stackoverflow.com/a/54086635/429476) and run. 
The shell scripts for CURRENTDIR and PARENTDIR needs to be adopted to Windows Path format

-------------------------
(The github ci events is enabled for this- you can fork - do some dummy changes and create a pull request to see the make in action https://github.com/alexcpn/golang_grpc_example/pull/5/checks?check_run_id=372118434)

