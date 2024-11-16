'use client'

import { Switch } from '@nextui-org/switch';
import { useState } from 'react';

import { cls } from '@/app/utils/string';

import style from './social-link-item.module.scss';
import { SocialLinkItemProps } from './types';

export default function SocialLinkItem({
  id,
  icon,
  name,
  isDraft
}: SocialLinkItemProps) {
  const [isSelected, setIsSelected] = useState(true);
  const onItemClick = () => {

  };

  return (
    <div className={style['social-link-item']}>
      <i className={cls('iconfont-my', 'icon-my-drag', 'icon-drag', 'cursor-grab', 'cursor-[-webkit-grab]')}></i>

      <div className={cls(style['social-link-content'], 'hover-bg')} onClick={onItemClick}>
        <i className={cls('iconfont-social-links', `icon-social-link-${icon}`)}></i>
        <span className={style['social-link-name']}>{name}</span>
        <i className='iconfont-my icon-my-edit'></i>
      </div>

      <Switch isSelected={isSelected} size='sm' />
    </div>
  );
}
