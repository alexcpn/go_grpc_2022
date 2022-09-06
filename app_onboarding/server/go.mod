module server

go 1.12

require (
	github.com/envoyproxy/protoc-gen-validate v0.1.0 // indirect
	github.com/sirupsen/logrus v1.4.2
	google.golang.org/grpc v1.22.1
	interfaces v0.0.0-00010101000000-000000000000
)

replace interfaces => ../generated
