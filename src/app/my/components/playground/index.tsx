'use client'

import { ReactSortable } from 'react-sortablejs';
import AddModule from './components/add-module';
import BaseInfo from './components/base-info';
import URL from './components/modules-factory/url';
import style from './playground.module.scss';
import { useState } from 'react';

export default function Playground() {
  const [list, setList] = useState([]);

  return (
    <div className={style.wrapper}>
      <main className={style['action-wrapper']}>
        <BaseInfo />

        <AddModule />

        <ReactSortable
          handle='.template-drag-icon'
          ghostClass='drag-ghost'
          chosenClass='drag-chosen'
          animation={200}
          list={list}
          setList={setList}
          className={style.modules}
        >
          <URL key='a' />
          <URL key='b' />
          <URL key='c' />
        </ReactSortable>
      </main>

      <section className={style['right-wrapper']}>

      </section>
    </div>
  );
}
