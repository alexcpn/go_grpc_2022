# Build a slim GRPC Go Container
# using multistage build
# https://docs.docker.com/develop/develop-images/multistage-build/

# Build the grpc/go:1.19 image first if not there. This is in docker-go1.19/Dockerfile.go_grpc.1.19 folder in thes repo
FROM grpc/go:1.19 AS build

WORKDIR /golang_grpc_test
COPY . /golang_grpc_test
# Make inside the above docker
RUN cd /golang_grpc_test/microservice_1 && make all

# final stage
FROM alpine
WORKDIR /app

# Copy the binaries
COPY --from=build /golang_grpc_test/microservice_1/generated/run_server /app/
# https://stackoverflow.com/questions/34729748/installed-go-binary-not-found-in-path-on-alpine-linux-docker
RUN mkdir /lib64 && ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2
ENTRYPOINT ./run_server
