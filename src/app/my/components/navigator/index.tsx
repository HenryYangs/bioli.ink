'use client'

import '@/app/assets/icon/my/iconfont.css';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import UserEntry from '../user';
import { NAV_LIST } from './config';
import style from './navigator.module.scss';

export default function Navigator() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className={style.wrapper}>
      <Image src='' alt='logo' />

      <ul className={style['nav-list']}>
        {
          NAV_LIST.map(item => (
            <li
              key={item.name}
              className={[style['nav-item'], currentPath === item.redirect ? style.active : ''].join(' ')}
            >
              <a className={style['nav-item_link']} href={item.redirect}>
                <i className={`iconfont icon-my-${item.icon}`}></i>

                <span className={style['nav-item_name']}>{item.name}</span>
              </a>
            </li>
          ))
        }
      </ul>

      <UserEntry />
    </nav>
  );
};
