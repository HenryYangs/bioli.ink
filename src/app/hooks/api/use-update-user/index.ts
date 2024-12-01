import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { updateUser } from '@/app/api/user';

export const useUpdateUser = () => {
  const { run } = useRequest(updateUser, {
    manual: true,
    onSuccess: () => {
      // 对于需要调用这个接口的地方，暂时看起来都需要刷新页面
      location.reload();
    },
  });

  return { run };
};
