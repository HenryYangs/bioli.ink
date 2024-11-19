'use client'

import style from './base-info.module.scss';
import BaseInfoEdit from './edit';
import BaseInfoMain from './main';

export default function BaseInfo() {
  return (
    <section className={style.wrapper}>
      <BaseInfoMain className='flex-1' />

      <BaseInfoEdit />
    </section>
  );
}
