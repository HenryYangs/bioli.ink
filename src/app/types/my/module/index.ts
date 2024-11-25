export enum ModuleType {
  URL = 'url',
}

export interface UserModuleBase {
  type: ModuleType;
  'data-id': string;
}

export interface UserModuleUrlProps {
  title: string;
  link: string;
}

export interface UserModuleUrl extends UserModuleBase, UserModuleUrlProps {}

export type UserModule = UserModuleUrl;
