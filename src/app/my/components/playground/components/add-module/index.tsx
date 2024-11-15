'use client'

import { Button } from '@nextui-org/button';

import { cls } from '@/app/utils/string';

import style from './add-module.module.scss';

export default function AddModule() {
  return (
    <section className={style['add-module']}>
      <Button radius='full' className={cls(style['add-link'], 'btn-main-color')}>
        <i className={cls('iconfont', 'icon-my-plus', style['add-link_icon'])}></i>
        <span>添加链接</span>
      </Button>

      <Button radius='full' className='btn-main-color-other'>添加其它模块</Button>
    </section>
  )
}
