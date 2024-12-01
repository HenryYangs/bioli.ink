import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { getBaseInfo } from '@/app/api/user';
import UniqueUsername from '@/app/components/unique-username';
import { EVENTS } from '@/app/constant/events';
import event from '@/app/utils/event';

export const useUserBaseInfo = () => {
  const { run, data } = useRequest(getBaseInfo, {
    onSuccess: (response) => {
      /**
       * 如果没有设置用户名
       * 必须打开一个不能关闭的弹窗来设置用户名
       */
      if (!response.username) {
        event.emit(EVENTS.SHOW_MODAL, {
          title: '设置你的唯一用户名',
          body: <UniqueUsername />,
          modalProps: {
            isDismissable: false
          },
          showCloseBtn: false
        });
      }
    },
  });

  return { run, data };
};
