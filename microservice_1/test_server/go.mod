module test_server

go 1.19

require (
	google.golang.org/grpc v1.48.0
	interfaces v0.0.0-00010101000000-000000000000
	server v0.0.0
)

require (
	github.com/golang/protobuf v1.5.2 // indirect
	github.com/konsorten/go-windows-terminal-sequences v1.0.1 // indirect
	github.com/sirupsen/logrus v1.4.2 // indirect
	golang.org/x/net v0.0.0-20201021035429-f5854403a974 // indirect
	golang.org/x/sys v0.0.0-20210119212857-b64e53b001e4 // indirect
	golang.org/x/text v0.3.3 // indirect
	google.golang.org/genproto v0.0.0-20200526211855-cb27e3aa2013 // indirect
	google.golang.org/protobuf v1.27.1 // indirect
)

replace interfaces => ../generated

replace server => ../server
