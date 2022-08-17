import * as grpcWeb from 'grpc-web';

import { SearchServiceClient } from '../generated/microservice_1/TestServiceClientPb';
import { SearchRequest } from '../generated/microservice_1/test_pb';
import { SearchResponse } from '../generated/microservice_1/test_pb';



const searchService = new SearchServiceClient('http://localhost:8080', null, null);


// Some DOM Manipulation 

window.onload = () => {
  console.log('On Page Load');
  let btn = document.getElementById("coolbutton");
  var input = document.getElementById('showresulthere') as HTMLElement | null;
  if (input != null) {
    console.log(input.textContent);
    btn.addEventListener("click", (e: Event) => showResult(input));
  } else {
    console.log("input is null");
  }

}

function showResult(input: HTMLElement) {

  //Call the Server with some hard coded values
  const searchRequest = new SearchRequest();
  searchRequest.setQuery('query');
  searchRequest.setEmailId('my@emailId.com');
  var temp_response = "";

  const call = searchService.search(searchRequest, {}, (err: grpcWeb.RpcError, response: SearchResponse) => {
    if (err) {
      console.error(err);
      return;
    }
    temp_response = response.getSearchResponse();
    console.log(temp_response);
    if (input != null) {
      input.textContent = temp_response;
    } else {
      console.log("input is null");
    }
  }
  );

  call.on('status', (status: grpcWeb.Status) => {
    if (status.metadata) {
      console.log('Received metadata');
      console.log("status.metadata", status.metadata);
    }
  });


}