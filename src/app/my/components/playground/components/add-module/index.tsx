'use client'

import { Button } from '@nextui-org/button';

import { cls } from '@/app/utils/string';

import style from './add-module.module.scss';

export default function AddModule() {
  return (
    <section className={style['add-module']}>
      <Button className={style['add-link']}>
        <i className={cls('iconfont', 'icon-my-plus', style['add-link_icon'])}></i>
        <span>添加链接</span>
      </Button>

      <Button className={style['add-other-module']}>添加其它模块</Button>
    </section>
  )
}
