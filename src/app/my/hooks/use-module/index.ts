import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { getModule, updateModule } from '../../api/module';

export const useQueryModule = () => {
  const { runAsync } = useRequest(getModule, {
    manual: true,
  });

  return { runAsync };
};

export const useUpdateModule = () => {
  const { run, runAsync } = useRequest(updateModule, {
    manual: true,
  });

  return { run, runAsync };
};
