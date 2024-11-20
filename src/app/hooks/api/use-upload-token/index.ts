import { useRequest } from 'ahooks';

import { getUploadToken } from '@/app/api/auth';

export const useUploadToken = () => {
  const { runAsync } = useRequest(getUploadToken, {
    manual: true,
  });

  return { runAsync };
};
