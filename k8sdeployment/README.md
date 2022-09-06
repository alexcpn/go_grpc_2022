# Deploy the Server in a Kubernetes cluster


## Build the server docker image and enovy side-car image

Make file [../microservice_1/Makefile](../microservice_1/Makefile)

```
make docker_image
```
Prerequisite:
  A Kubernetes cluster. If none use `kind` and create a local cluster

Deploy the deployment file  [k8sdeployment/microservice_1/deployment.yaml](./microservice_1/deployment.yaml)

`kubectl create -f deployment.yaml`

This should run the pods and Expose the service

```
kubectl get deployments -n grpc
NAME              READY   UP-TO-DATE   AVAILABLE   AGE
grpc-deployment   1/1     1            1           5m4s

kubectl get pods -n grpc
NAME                              READY   STATUS    RESTARTS   AGE
grpc-deployment-d5966d567-kbdt7   2/2     Running   0          51s

kubectl get svc -n grpc
NAME           TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
grpc-service   NodePort   10.96.183.115   <none>        8080:30036/TCP   66s
```
## Port forward to expose the service outside the cluster

We will use port forwarding and expose the service ingress 8080 to local host

```
kubectl -n grpc  port-forward svc/grpc-service 8080:8080
Forwarding from 127.0.0.1:8080 -> 8080
Forwarding from [::1]:8080 -> 8080
```

## Run the Client through a simple Web server

Let's run the Chrome WebServer and Run the Typescript Client.

 Please refer to the [README.md in ts_client folder](../../ts_client/README.md) in ts_client folder on how to run the Typescript client

You should get the response from the Server as below

![response](https://i.imgur.com/WqcFiCS.png)
