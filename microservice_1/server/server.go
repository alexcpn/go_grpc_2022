package server

import (
	"context"
	 log "github.com/sirupsen/logrus"
	 pb "interfaces/microservice_1"
)

// server is used to implement the server
type Server struct{
	pb.UnimplementedSearchServiceServer
}

func (s *Server)Search(ctx context.Context, in *pb.SearchRequest) (*pb.SearchResponse, error){
	log.Printf("Received Emailid: %v", in.EmailId)
	log.Printf("Received Query: %v", in.Query)
	
	// Note this is the only place we use validate
	response := pb.SearchResponse{SearchResponse: "Some Valid response from server " }
	return &response, nil
	
}



