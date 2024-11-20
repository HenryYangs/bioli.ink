export interface GetUploadTokenReq {
  type: 'avatar';
  name?: string;
  [key: string]: string | undefined;
}

export interface GetUploadTokenRsp {
  token: string;
}
