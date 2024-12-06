import { GetBaseInfoRsp, GetClientUserInfoRsp, UpdateUserReq } from '@/app/types/api/user';
import http from '@/app/utils/http';

const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

export const getBaseInfo = () => {
  return http.get<null, GetBaseInfoRsp>(`${SERVER_DOMAIN}/user/base-info`);
};

// 更新用户基础信息
export const updateUser = (data: UpdateUserReq) => {
  return http.put<UpdateUserReq, null>(`${SERVER_DOMAIN}/user`, data);
};

export const getClientUserInfo = (username: string) => {
  return http.get<null, GetClientUserInfoRsp>(`${SERVER_DOMAIN}/client/user/${username}`);
};
