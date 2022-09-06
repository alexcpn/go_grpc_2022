
# Gnu MAKE is particular about tabs and spaces. All commands must be indented with tabs
# Note If you have spaces anywhere mixed with tab you will get error like `Makefile:27: *** recipe commences before first target.  Stop.`

CURRENTDIR =  $(shell pwd)
PARENTDIR = $(shell dirname $(CURRENTDIR))

# Set the variables
PB_REL := https://github.com/protocolbuffers/protobuf/releases
GRPCWEBREL := https://github.com/grpc/grpc-web/releases/download
GPRCWEB := 1.3.1
GOPATH = $(HOME)/go
PATH := $(PATH):$(GOPATH)/bin:$(HOME)/.local/bin
#HTTP_PROXY = <> in case you are building within enterpirse network


# Simple Go based Microservice Make file 

once: install_protoc _get_deps1 _get_deps2
all: clean build_proto _build_go

clean:
	-rm -rf generated/*

#Install Protoc  - Do this only once
install_protoc:
	$(info  HOME is  $(HOME))
	$(info Downloading from  $(PB_REL)/download/v3.15.8/protoc-3.15.8-linux-x86_64.zip)
	$(shell curl -LO $(PB_REL)/download/v3.15.8/protoc-3.15.8-linux-x86_64.zip)
# A dash before the line below tells MAKE to ignore the error if the command fails.
	-$(shell unzip protoc-3.15.8-linux-x86_64.zip -d $(HOME)/.local)
	-$(shell protoc --version)

# Get and install the Golang GRPC plugins - Do this only once
_get_deps1:
# If you need a new version update here* and remove all the indirect dependency in go.mod file (and run go clean -modcache  if required)
# Running this target will then update the correct indirect dependency in go.mod file
# *https://grpc.io/docs/languages/go/quickstart/ (take the latest from here)
	-cd generated && go mod init server 
	go mod tidy
	go get -d google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
	go get -d google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
# Go get no longer does installation after Go 1.17
	go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

# The linter is used for linting Go Code; This is opetions	
_get_deps2:
	go get -d github.com/golangci/golangci-lint@v1.48.0

# Building the Protobuf Code. Note the new way with --go-out as well as --go-grpc-out
build_proto:
# Go mod is now needed in the generated folder to use the protobuffer files 
	-mkdir generated
	-cd generated && go mod init server 
	protoc -I ../interfaces/ ../interfaces/app_onboarding/*.proto --go_out=./generated \
	--go-grpc_out=./generated 

_build_go:
# let us do the test, get the coverage
	cd integration_test && go test -coverprofile=../generated/cover.out -coverpkg=server \
	&& go tool cover -html=../generated/cover.out -o ../generated/cover.html
# lets run the linter  -ignore on fail
	-golangci-lint run > ./generated/linter.out
	cd run_server && go mod tidy &&  go build -o ../generated/run_server
	
# Build a Docker conatiner for the MS 
# Not that this builds the Go project inside the container  itself. This could be a good pattern to build in CI
docker_image:
	docker build -t app_onboarding:1.1 -f  Dockerfile $(PARENTDIR) 
#Build the side car with the configuration as well
	cd envoy && docker build -t envoy_app_onboarding:1.0 .
podman_image:
	podman build -t app_onboarding:1.1 -f  Dockerfile $(PARENTDIR) 

#--------------------End-----------------------------


# Ignore the target below if it seems complex.
# It is basically same as above; but puts the build output to the host - Not recommended

# Build inside docker with volume mapping to generate the documentation or test locally
# !! Note !! that when you run in docker the files that is generated in volume map will have
# docker user permissions  (root) So you need to change that if you are working iside
#-rw------- 1 root root  1261 Jan  3 11:33 go.mod
#-rw------- 1 root root 49400 Jan  3 11:27 go.sum

make_in_docker_with_vol_map:
	echo "ENV variables check" $(CURRENTDIR) $(HTTP_PROXY)  $(PARENTDIR)

	docker run  --env http_proxy=$(HTTP_PROXY) --env https_proxy=$(HTTP_PROXY) \
	--rm -it -v $(PARENTDIR):/go/golang_grpc_test grpc/go:1.19 /bin/sh -c \
	 'cd golang_grpc_test/microservice_1 && make all'

