import { nanoid } from 'nanoid';

import { ModuleType } from '@/app/types/my/module';

export const getDefaultUrl = () => ({
  type: ModuleType.URL,
  'data-id': nanoid(8),
  title: '我的链接',
  link: '',
});
