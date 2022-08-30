"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for
 * @enhanceable
 * @public
 */
exports.__esModule = true;
exports.SearchServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = require("grpc-web");
var microservice_1_test_pb = require("../microservice_1/test_pb");
var SearchServiceClient = /** @class */ (function () {
    function SearchServiceClient(hostname, credentials, options) {
        this.methodDescriptorSearch = new grpcWeb.MethodDescriptor('/SearchService/Search', grpcWeb.MethodType.UNARY, microservice_1_test_pb.SearchRequest, microservice_1_test_pb.SearchResponse, function (request) {
            return request.serializeBinary();
        }, microservice_1_test_pb.SearchResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'binary';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    SearchServiceClient.prototype.search = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/SearchService/Search', request, metadata || {}, this.methodDescriptorSearch, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/SearchService/Search', request, metadata || {}, this.methodDescriptorSearch);
    };
    return SearchServiceClient;
}());
exports.SearchServiceClient = SearchServiceClient;
