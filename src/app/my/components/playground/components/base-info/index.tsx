'use client'

import style from './base-info.module.scss';
import BaseInfoEdit from './edit';
import BaseInfoMain from './main';

export default function BaseInfo() {
  return (
    <section className={style['base-info']}>
      <BaseInfoMain />

      <BaseInfoEdit />
    </section>
  );
}
