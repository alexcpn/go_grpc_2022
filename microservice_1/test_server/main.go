package main

import (
	"log"
	 "net"
	 "fmt"
	"google.golang.org/grpc"
	pb "interfaces/microservice_1"
	server "server"
)

// server is used to implement the server


const (
	port = ":50051"
)
func main() {
	//coding/testgo# go build cassandratest && ./cassandratest -ni 10 -nq 1000000 -del=false -pno=10
	fmt.Println("Go protobuffer test")
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterSearchServiceServer(s, &server.Server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
