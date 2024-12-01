import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { GetUserConfigRsp } from '@/app/types/api/config';

import { getUserConfig } from '../../api/config';

export const useUserConfig = ({ onSuccess }: { onSuccess: (response: GetUserConfigRsp) => void }) => {
  const { run, data } = useRequest(getUserConfig, {
    onSuccess
  });

  return { run, data };
};
