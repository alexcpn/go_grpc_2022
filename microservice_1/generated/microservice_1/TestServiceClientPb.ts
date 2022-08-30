/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as microservice_1_test_pb from '../microservice_1/test_pb';


export class SearchServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSearch = new grpcWeb.MethodDescriptor(
    '/SearchService/Search',
    grpcWeb.MethodType.UNARY,
    microservice_1_test_pb.SearchRequest,
    microservice_1_test_pb.SearchResponse,
    (request: microservice_1_test_pb.SearchRequest) => {
      return request.serializeBinary();
    },
    microservice_1_test_pb.SearchResponse.deserializeBinary
  );

  search(
    request: microservice_1_test_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null): Promise<microservice_1_test_pb.SearchResponse>;

  search(
    request: microservice_1_test_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: microservice_1_test_pb.SearchResponse) => void): grpcWeb.ClientReadableStream<microservice_1_test_pb.SearchResponse>;

  search(
    request: microservice_1_test_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: microservice_1_test_pb.SearchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/SearchService/Search',
        request,
        metadata || {},
        this.methodDescriptorSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/SearchService/Search',
    request,
    metadata || {},
    this.methodDescriptorSearch);
  }

}

