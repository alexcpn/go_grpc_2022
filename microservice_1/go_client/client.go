//the client part
package main

import (
	"context"
	"log"
	"time"
	pb "interfaces/microservice_1"
	"google.golang.org/grpc"
)

const (
	address     = "localhost:50051"
)

func main() {
	// Set up a connection to the server.
	conn, err := grpc.Dial(address, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	c := pb.NewSearchServiceClient(conn)
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	r, err := c.Search(ctx, &pb.SearchRequest{Query: "Protocol Buffer",EmailId: "alex.test@gmail.com"})
	if err != nil {
		log.Fatalf("could not execute search: %v", err)
	}
	log.Printf("Greeting: %s", r.SearchResponse)
}