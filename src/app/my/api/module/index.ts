import { GetModuleRsp, UpdateModuleReq } from '@/app/types/api/module';
import http from '@/app/utils/http';

const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

export const updateModule = (data: UpdateModuleReq) => {
  return http.put<UpdateModuleReq, null>(`${SERVER_DOMAIN}/module`, data);
};

export const getModule = () => {
  return http.get<null, GetModuleRsp>(`${SERVER_DOMAIN}/module`);
};
