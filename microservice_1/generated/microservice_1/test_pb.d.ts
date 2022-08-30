import * as jspb from 'google-protobuf'



export class SearchRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchRequest;

  getEmailId(): string;
  setEmailId(value: string): SearchRequest;

  getPageNumber(): number;
  setPageNumber(value: number): SearchRequest;

  getResultPerPage(): number;
  setResultPerPage(value: number): SearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    query: string,
    emailId: string,
    pageNumber: number,
    resultPerPage: number,
  }
}

export class SearchResponse extends jspb.Message {
  getSearchResponse(): string;
  setSearchResponse(value: string): SearchResponse;

  getPageNumber(): number;
  setPageNumber(value: number): SearchResponse;

  getTotalPages(): number;
  setTotalPages(value: number): SearchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    searchResponse: string,
    pageNumber: number,
    totalPages: number,
  }
}

