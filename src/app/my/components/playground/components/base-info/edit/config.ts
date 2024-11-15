import { EVENTS } from '@/app/constant/events';
import { BaseInfoEditTrigger } from '@/app/types/my/base-info';
import event from '@/app/utils/event';

export const BASE_INFO_EDIT: BaseInfoEditTrigger[] = [
  {
    id: 'avatar',
    title: '编辑头像',
    icon: 'image',
    action: () => {
      event.emit(EVENTS.AVATAR_CLICK);
    },
  },
  {
    id: 'name-bio',
    title: '编辑用户名和简介',
    icon: 'user',
    action: () => {
      event.emit(EVENTS.USERNAME_INTRO_CLICK);
    },
  },
  {
    id: 'social-links',
    title: '编辑社交平台链接',
    icon: 'social',
  },
];
