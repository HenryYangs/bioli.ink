'use client'

import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import AddModule from './components/add-module';
import BaseInfo from './components/base-info';
import URL from './components/modules-factory/url';
import Preview from './components/preview';
import StyleSettings from './components/style-settings';
import style from './playground.module.scss';

export default function Playground() {
  const [list, setList] = useState([]);

  return (
    <div className={style.wrapper}>
      <main className={style['action-wrapper']}>
        <div className={style['action-inner-wrapper']}>
          <BaseInfo />

          <StyleSettings />

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
        </div>
      </main>

      <Preview />
    </div>
  );
}
