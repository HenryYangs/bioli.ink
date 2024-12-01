import { GetUserConfigRsp } from '@/app/types/api/config';
import http from '@/app/utils/http';

const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

export const getUserConfig = () => {
  return http.get<null, GetUserConfigRsp>(`${SERVER_DOMAIN}/config`);
}
