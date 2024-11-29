import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { getVerifyCode } from '@/app/api/auth';

export const useVerifyCode = () => {
  const { runAsync, loading } = useRequest(getVerifyCode, {
    manual: true,
  });

  return { runAsync, loading };
};
