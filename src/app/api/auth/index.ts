import { AuthReq, GetUploadTokenReq, GetUploadTokenRsp, GetVerifyCodeReq, RegisterRsp } from '@/app/types/api/auth';
import http from '@/app/utils/http';
import { queryStringify } from '@/app/utils/transform';

const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

export const getUploadToken = (props: GetUploadTokenReq) => {
  return http.get<GetUploadTokenReq, GetUploadTokenRsp>(`${SERVER_DOMAIN}/api/auth/upload-token?${queryStringify(props)}`);
};

export const getVerifyCode = (props: GetVerifyCodeReq) => {
  return http.get<GetVerifyCodeReq, null>(`${SERVER_DOMAIN}/api/auth/verify-code?${queryStringify(props)}`);
};

export const requestRegister = (props: AuthReq) => {
  return http.post<AuthReq, RegisterRsp>(`${SERVER_DOMAIN}/api/auth/register`, props);
};

export const requestLogin = (props: AuthReq) => {
  return http.post<AuthReq, null>(`${SERVER_DOMAIN}/api/auth/login`, props);
}
