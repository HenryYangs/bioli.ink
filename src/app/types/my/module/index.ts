export enum ModuleType {
  URL = 'url',
}

export enum ModuleStatus {
  PUBLISHED = 1, // 正常展示
  DRAFT, // 添加了但不展示
  DELETED, // 已删除，支持后续可以恢复
}

export interface UserModuleBase {
  id: string;
  type: ModuleType;
  status: ModuleStatus;
}

export interface UserModuleUrlProps {
  title: string;
  url: string;
}

export interface UserModuleUrl extends UserModuleBase, UserModuleUrlProps {}

export type UserModule = UserModuleUrl;
