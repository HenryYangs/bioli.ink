'use client'

import { useBaseInfoEvents } from '../../hooks/use-base-info-events';
import style from './base-info.module.scss';
import BaseInfoEdit from './edit';
import BaseInfoMain from './main';

export default function BaseInfo() {
  useBaseInfoEvents();

  return (
    <section className={style.wrapper}>
      <BaseInfoMain className='flex-1' />

      <BaseInfoEdit />
    </section>
  );
}
