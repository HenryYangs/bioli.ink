import { BaseUserConfig } from '../common';

export interface UpdateUserConfigReq {
  name?: string;
  type?: number;
  otherType?: string;
  avatar?: string;
  bio?: string;
  platform?: string;
}

export interface GetUserConfigRsp extends BaseUserConfig {
  modules: {
    id: string;
    userId: string;
    json: string;
  }
}
