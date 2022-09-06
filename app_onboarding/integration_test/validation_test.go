
package main

import (
	"testing"
	"log"
	"net"
	"time"
	"context"
	"os"
	"google.golang.org/grpc"
	pb "interfaces/app_onboarding"
	server "server"
	"google.golang.org/grpc/test/bufconn"
)

const (
	//port = ":50052"
	bufSize = 1024 * 1024
)

var lis *bufconn.Listener

func setup(){
	log.Printf("OnBoardApp  test")

	// Integration testing GRPC in memory
	lis = bufconn.Listen(bufSize)
	s := grpc.NewServer()
	pb.RegisterAppOnboardingServiceServer(s, &server.Server{})
	go func() {
		if err := s.Serve(lis); err != nil {
			log.Fatalf("failed to serve: %v", err)
		}
	}()
}
func bufDialer(string, time.Duration) (net.Conn, error) {
    return lis.Dial()
}
// this TestMain implements setup and tear down
func TestMain(m *testing.M) {
	setup()
	code := m.Run() 
    os.Exit(code)
}

// Test Positive - proper validation
func TestPositiveValidation(t *testing.T){
	log.Printf("Astrix goes for Peace - Pass good responses")
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	conn, err := grpc.DialContext(ctx,"bufnet", grpc.WithDialer(bufDialer),grpc.WithInsecure())
	if err != nil {
		t.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	c := pb.NewAppOnboardingServiceClient(conn)
	r, err := c.OnBoardApp(ctx, &pb.AppOnboardingRequest{CompanyName: "My Company",EmailId: "alex.test@gmail.com",ApplicationName: "Test"})
	if err != nil {
		t.Fatalf("Could not execute OnBoardApp: %v", err)
	}
	log.Printf("AppOnboardingResponse: %s", r.AppResponse)
}

