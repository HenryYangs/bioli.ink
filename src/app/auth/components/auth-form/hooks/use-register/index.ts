import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { requestRegister } from '@/app/api/auth';

export const useRegister = ({ onSuccess }: { onSuccess: () => void }) => {
  const { runAsync, loading } = useRequest(requestRegister, {
    manual: true,
    onSuccess
  });

  return { runAsync, loading };
};
