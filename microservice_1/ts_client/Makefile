
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

# Simple TypeScript Client for Go based Microservice  

once: install_grpcweb install_webpack
all: clean compile_grpcweb typescript

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

install_webpack:
	npm install webpack webpack-cli --save-dev	

install_grpcweb:
	$(info  Downloading from $(GRPCWEBREL)/$(GPRCWEB)/protoc-gen-grpc-web-$(GPRCWEB)-linux-x86_64)$(shell curl -LO $(GRPCWEBREL)/$(GPRCWEB)/protoc-gen-grpc-web-$(GPRCWEB)-linux-x86_64)
	$(shell chmod +x protoc-gen-grpc-web-$(GPRCWEB)-linux-x86_64)
	$(shell mv protoc-gen-grpc-web-$(GPRCWEB)-linux-x86_64 $(HOME)/.local/bin/protoc-gen-grpc-web)

compile_grpcweb:
	-mkdir -p generated
	protoc  -I ../../interfaces/ ../../interfaces/microservice_1/*.proto \
	--js_out=import_style=commonjs,binary:./generated \
	--grpc-web_out=import_style=typescript,mode=grpcweb:./generated


# Building the Protobuf Code. Note the new way with --go-out as well as --go-grpc-out
typescript:
# Go mod is now needed in the generated folder to use the protobuffer files 
	npm install
	cd src && tsc index.ts
# use webpack and bundle all needed files together
	npx webpack


