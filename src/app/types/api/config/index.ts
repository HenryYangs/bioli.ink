export interface GetUserConfigRsp {
  id: string;
  username: string;
  mobile: string;
  baseConfig: {
    id: string;
    create_time: Date;
    update_time: Date;
    name: string;
    user_id: string;
    type: number;
    other_type: string;
    avatar: string;
    bio: string | null;
    platform: string | null;
    theme_id: string;
  };
  modules: {
    id: string;
    create_time: Date;
    update_time: Date;
    name: string;
    user_id: string;
    type: number; // $Enums.ModuleType;
    status: number;
    order_idx: number;
    detail: string;
  }[],
  theme: {
    id: string;
    create_time: Date;
    update_time: Date;
    type: number | null;
    status: number | null;
    header: string | null;
    font: string | null;
    background: string | null;
    module: string | null;
    social: string | null;
    sharing: string | null;
    author_id: string;
  }[]
}
