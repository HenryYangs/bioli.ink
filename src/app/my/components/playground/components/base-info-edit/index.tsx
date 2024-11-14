'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { useState } from 'react';

import { cls } from '@/app/utils/string';

import style from './base-info-edit.module.scss';
import { BASE_INFO_EDIT } from './config';

export default function BaseInfoEdit() {
  const [isOpen, setIsOpen] = useState(false);

  const onItemClick = () => {
    setIsOpen(false);
  }

  return (
    <Popover
      placement='bottom-end'
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>
        <div className={style['base-info_edit']}>
          <i className={cls('iconfont', 'icon-my-ellipsis')}></i>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <ul className={style['edit-wrapper']}>
          {
            BASE_INFO_EDIT.map(item => (
              <li key={item.id} className='hover-bg' onClick={onItemClick}>
                <i className={cls('iconfont', `icon-my-${item.icon}`)}></i>
                <span className={style['edit-item_text']}>{item.title}</span>
              </li>
            ))
          }
        </ul>
      </PopoverContent>
    </Popover>
  );
}
