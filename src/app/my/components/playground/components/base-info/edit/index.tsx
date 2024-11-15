'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { useState } from 'react';

import { BaseInfoEditTrigger } from '@/app/types/my/base-info';
import { cls } from '@/app/utils/string';

import { BASE_INFO_EDIT } from './config';
import style from './edit.module.scss';

export default function BaseInfoEdit() {
  const [isOpen, setIsOpen] = useState(false);

  const onItemClick = (item: BaseInfoEditTrigger) => {
    item.action?.();
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
              <li key={item.id} className='hover-bg' onClick={() => onItemClick(item)}>
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
