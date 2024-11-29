import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { requestRegister } from '@/app/api/auth';

export const useRegister = () => {
  const { runAsync, loading } = useRequest(requestRegister, {
    manual: true,
  });

  return { runAsync, loading };
};
