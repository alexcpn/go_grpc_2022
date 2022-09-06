package server

import (
	"context"
	 log "github.com/sirupsen/logrus"
	 pb "interfaces/app_onboarding"
	 "time"
)

// server is used to implement the server
type Server struct{
	pb.UnimplementedAppOnboardingServiceServer
}

func (s *Server)OnBoardApp(ctx context.Context, in *pb.AppOnboardingRequest) (*pb.AppOnboardingResponse, error){
	log.Printf("Received Emailid: %v", in.EmailId)
	log.Printf("Received comanyname: %v", in.CompanyName)
	var searchResponse = "Input received is: " + in.EmailId + "Query " + in.CompanyName +"\n" + 
	 "Response is: Some Valid Result at " + time.Now().Format(time.RFC850)
	log.Printf("Sending Response: %v", searchResponse)
	// Note this is the only place we use validate
	response := pb.AppOnboardingResponse{AppResponse: searchResponse,CompanyId:12312,Timestamp:time.Now().Format(time.RFC850) }
	return &response, nil
	
}



