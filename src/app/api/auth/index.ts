import { GetUploadTokenReq, GetUploadTokenRsp } from '@/app/types/api/auth';
import http from '@/app/utils/http';
import { queryStringify } from '@/app/utils/transform';

const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

export const getUploadToken = (props: GetUploadTokenReq) => {
  return http.get<GetUploadTokenReq, GetUploadTokenRsp>(`${SERVER_DOMAIN}/api/auth/upload-token?${queryStringify(props)}`);
};
