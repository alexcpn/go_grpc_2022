# Make a Docker container for Go 1.19 with GRPC

To use in building Go projects in the container if needed

Note This is the base container -only needed if THIS Container (grpc/go:1.19) does not exist

Build command docker build --build-arg  http_proxy=  -t grpc/go:1.19 -f Dockerfile.go_grpc.1.19 .