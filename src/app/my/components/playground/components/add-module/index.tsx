'use client'

import { Button } from '@nextui-org/button';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { ModuleType } from '@/app/constant/module';
import { addUserModule } from '@/app/my/redux/my';
import { cls } from '@/app/utils/string';

import style from './add-module.module.scss';

export default function AddModule() {
  const dispatch = useDispatch();

  const onAddModule = () => {
    // TODO 单独维护各模块的默认值
    dispatch(addUserModule({
      type: ModuleType.URL,
      'data-id': nanoid(8),
      title: '',
      link: '',
    }));
  };

  return (
    <section className={style['add-module']}>
      <Button
        radius='full'
        className={cls(style['add-link'], 'btn-main-color')}
        onPress={onAddModule}
      >
        <i className={cls('iconfont-my', 'icon-my-plus', style['add-link_icon'])}></i>
        <span>添加链接</span>
      </Button>

      {/* <Button radius='full' className='btn-main-color-other'>添加其它模块</Button> */}
    </section>
  )
}
