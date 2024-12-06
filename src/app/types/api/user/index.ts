import { UserModule } from '../../my/module';
import { BaseUserConfig } from '../common';

export interface GetBaseInfoRsp {
  id: string;
  mobile: string;
  username: string;
  name: string;
  avatar: string;
}

export interface UpdateUserReq {
  username?: string;
}

export interface GetClientUserInfoRsp extends BaseUserConfig {
  modules: {
    id: string;
    name: string;
    userId: string;
    list: UserModule[];
  };
}

