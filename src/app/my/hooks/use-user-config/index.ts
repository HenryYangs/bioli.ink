import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { getUserConfig } from '../../api/config';
import { UserConfig } from '@/app/types/api/common';

export const useUserConfig = ({ onSuccess }: { onSuccess: (response: UserConfig) => void }) => {
  const { run, data } = useRequest(getUserConfig, {
    onSuccess
  });

  return { run, data };
};
