// 组件的状态
export enum AvatarStatus {
  SELECT = 'select',
  CROP = 'crop',
  UPLOAD = 'upload',
}

export interface PersonalAvatarProps {
  userId: string;
  onSuccess: (url: string) => void;
}
