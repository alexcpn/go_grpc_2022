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
	log.Printf("Received Email-id: %v", in.EmailId)
	log.Printf("Received Company Name: %v", in.CompanyName)
	var searchResponse = "Application Updated \nCompany Name" + in.CompanyName +"\n" + 
	"Application Name" + in.ApplicationName +"\n" + 
	"Email ID" + in.EmailId +"\n" + 
	 "at " + time.Now().Format(time.RFC850)
	log.Printf("Sending Response: %v", searchResponse)
	// Note this is the only place we use validate
	response := pb.AppOnboardingResponse{AppResponse: searchResponse,CompanyId:12312,Timestamp:time.Now().Format(time.RFC850) }
	return &response, nil
	
}



