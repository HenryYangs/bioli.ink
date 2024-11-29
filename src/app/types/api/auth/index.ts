export interface GetUploadTokenReq {
  type: 'avatar';
  name?: string;
  [key: string]: string | undefined;
}

export interface GetUploadTokenRsp {
  token: string;
}

export interface GetVerifyCodeReq {
  mobile: string;
  [key: string]: string;
}

export interface AuthReq {
  mobile: string;
  verifyCode: string;
}

export interface RegisterRsp {
  id: string;
}
