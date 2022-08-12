
# Gnu MAKE is particular about tabs and spaces. All commands must be indented with tabs
# Note If you have spaces anywhere mixed with tab you will get error like `Makefile:27: *** recipe commences before first target.  Stop.`

CURRENTDIR =  $(shell pwd)
PARENTDIR = $(shell dirname $(CURRENTDIR))

PB_REL := https://github.com/protocolbuffers/protobuf/releases
GOPATH = $(HOME)/go
PATH := $(PATH):$(GOPATH)/bin:$(HOME)/.local/bin
#HTTP_PROXY = <> in case you are building within enterpirse network


# Simple Go based Microservice Make file 

once: install_protoc _get_deps1 _get_deps2
all: clean build_proto _build_go

clean:
	-rm -rf generated/*
install_protoc:
	$(info  HOME is  $(HOME))
	$(info Downloading from  $(PB_REL)/download/v3.15.8/protoc-3.15.8-linux-x86_64.zip)
	$(shell curl -LO $(PB_REL)/download/v3.15.8/protoc-3.15.8-linux-x86_64.zip)
# A dash before the line below tells MAKE to ignore the error if the command fails.
	-$(shell unzip protoc-3.15.8-linux-x86_64.zip -d $(HOME)/.local)
	-$(shell protoc --version)
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
	-cd generated && go mod init server 
	protoc -I ../interfaces/ ../interfaces/microservice_1/*.proto --go_out=./generated \
	--go-grpc_out=./generated 
_build_go:
# let us do the test, get the coverage
	cd integration_test && go test -coverprofile=../generated/cover.out -coverpkg=server \
	&& go tool cover -html=../generated/cover.out -o ../generated/cover.html
# lets run the linter  -ignore on fail
	-golangci-lint run > ./generated/linter.out
	cd test_server && go mod tidy &&  go build -o ../generated/test_server
	cd test_client && go build -o  ../generated/test_client

# Build a Docker conatiner for the MS - USE this for all
build_docker_image:
	docker build --build-arg  http_proxy=$(HTTP_PROXY) \
	 --build-arg https_proxy=$(HTTP_PROXY)  -t mysample_go_grpc:1.2 -f  Dockerfile $(PARENTDIR) 


# Build inside docker with volume mapping to generate the documentation or test locally
# !! Note !! that when you run in docker the files that is generated in volume map will have
# docker user permissions  EX below
#-rw------- 1 root root  1261 Jan  3 11:33 go.mod
#-rw------- 1 root root 49400 Jan  3 11:27 go.sum

make_in_docker_with_vol_map:
	echo "ENV variables check" $(CURRENTDIR) $(HTTP_PROXY)  $(PARENTDIR)

	docker run  --env http_proxy=$(HTTP_PROXY) --env https_proxy=$(HTTP_PROXY) \
	--rm -it -v $(PARENTDIR):/go/golang_grpc_test grpc/go:1.19 /bin/sh -c \
	 'cd golang_grpc_test/microservice_x && make all'

