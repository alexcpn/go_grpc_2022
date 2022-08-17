import * as grpcWeb from 'grpc-web';

import {SearchServiceClient} from '../generated/microservice_1/TestServiceClientPb';
import {SearchRequest} from '../generated/microservice_1/test_pb';
import {SearchResponse} from '../generated/microservice_1/test_pb';



const searchService = new SearchServiceClient('http://localhost:8080', null, null);

const searchRequest = new SearchRequest();
searchRequest.setQuery('query');
searchRequest.setEmailId('my@emailId.com');

const call = searchService.search(searchRequest, {}, (err: grpcWeb.RpcError, response:SearchResponse) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(response.getSearchResponse());
  console.log(response.getPageNumber());
  console.log(response.getTotalPages());
}
);
call.on('status', (status: grpcWeb.Status) => {
    if (status.metadata) {
      console.log('Received metadata');
      console.log(status.metadata);
    }
  });
