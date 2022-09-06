package main

import (
	"log"
	 "net"
	 "google.golang.org/grpc"
	pb "interfaces/app_onboarding"
	server "server"
)

// server is used to implement the server


const (
	port = ":50052"
)
func main() {
	//coding/testgo# go build cassandratest && ./cassandratest -ni 10 -nq 1000000 -del=false -pno=10
	log.Printf("Go GRPC Protobuffer test: Running on Port %v",port)
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterAppOnboardingServiceServer(s, &server.Server{})
	log.Printf("RegisterAppOnboardingServiceServer  Listening for connections on Port %v",port)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
