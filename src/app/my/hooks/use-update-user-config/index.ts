import useRequest from 'ahooks/lib/useRequest/src/useRequest'

import { updateUserConfig } from '../../api/config';

/**
 * 更新用户的配置
 */
export const useUpdateUserConfig = () => {
  const { run, runAsync } = useRequest(updateUserConfig, {
    manual: true,
  });

  return { run, runAsync };
}