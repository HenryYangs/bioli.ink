import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { requestLogin } from '@/app/api/auth';

export const useLogin = () => {
  const { runAsync, loading } = useRequest(requestLogin, {
    manual: true,
  });

  return { runAsync, loading };
};
