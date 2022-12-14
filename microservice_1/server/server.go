package server

import (
	"context"
	 log "github.com/sirupsen/logrus"
	 pb "interfaces/microservice_1"
	 "time"
)

// server is used to implement the server
type Server struct{
	pb.UnimplementedSearchServiceServer
}

func (s *Server)Search(ctx context.Context, in *pb.SearchRequest) (*pb.SearchResponse, error){
	log.Printf("Received Emailid: %v", in.EmailId)
	log.Printf("Received Query: %v", in.Query)
	var searchResponse = "Input received is: " + in.EmailId + "Query " + in.Query +"\n" + 
	 "Response is: Some Valid Result at " + time.Now().Format(time.RFC850)
	log.Printf("Sending Response: %v", searchResponse)
	// Note this is the only place we use validate
	response := pb.SearchResponse{SearchResponse: searchResponse }
	return &response, nil
	
}



