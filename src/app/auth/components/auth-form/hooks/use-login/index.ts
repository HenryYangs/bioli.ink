import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { requestLogin } from '@/app/api/auth';

export const useLogin = ({ onSuccess }: { onSuccess: () => void }) => {
  const { runAsync, loading } = useRequest(requestLogin, {
    manual: true,
    onSuccess,
  });

  return { runAsync, loading };
};
