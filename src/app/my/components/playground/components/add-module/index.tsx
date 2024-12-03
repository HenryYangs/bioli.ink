'use client'

import { Button } from '@nextui-org/button';
import { useDispatch, useSelector } from 'react-redux';

import { useUpdateModule } from '@/app/my/hooks/use-module';
import { RootState } from '@/app/my/redux';
import { updateUserModule } from '@/app/my/redux/my';
import { getDefaultUrl } from '@/app/my/utils/user-module';
import { cls } from '@/app/utils/string';

import style from './add-module.module.scss';

export default function AddModule() {
  const { userModules } = useSelector((root: RootState) => root.my);
  const dispatch = useDispatch();
  const { runAsync: runUpdateModule } = useUpdateModule();

  const onAddURL = () => {
    const newItem = getDefaultUrl();

    runUpdateModule({
      id: userModules.id,
      json: JSON.stringify([
        newItem,
        ...userModules.modules,
      ]),
    })
      .then(() => {
        dispatch(updateUserModule({
          action: 'add',
          item: newItem,
        }));
      })
  };

  return (
    <section className={style['add-module']}>
      <Button
        radius='full'
        className={cls(style['add-link'], 'btn-main-color')}
        onPress={onAddURL}
      >
        <i className={cls('iconfont-my', 'icon-my-plus', style['add-link_icon'])}></i>
        <span>添加链接</span>
      </Button>

      {/* <Button radius='full' className='btn-main-color-other'>添加其它模块</Button> */}
    </section>
  )
}
