import { nanoid } from 'nanoid';

import { ModuleStatus, ModuleType } from '@/app/types/my/module';

export const getDefaultUrl = () => ({
  id: nanoid(8),
  type: ModuleType.URL,
  status: ModuleStatus.PUBLISHED,
  title: '我的链接',
  url: 'https://www.example.com',
});
