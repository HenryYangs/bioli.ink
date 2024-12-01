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
