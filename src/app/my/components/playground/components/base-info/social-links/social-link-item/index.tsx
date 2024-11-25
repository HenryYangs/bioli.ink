'use client'

// import { Switch } from '@nextui-org/switch';
// import { useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import style from './social-link-item.module.scss';
import { SocialLinkItemProps } from './types';

export default function SocialLinkItem({
  index,
  allowSort,
  // onDraftChange,
  ...linkItem
}: SocialLinkItemProps) {
  const {
    // id,
    icon,
    name,
    // link,
    // isDraft,
  } = linkItem;

  const onItemClick = () => {
    event.emit(
      EVENTS.SHOW_MODAL_ADD_SOCIAL_LINK_ICON,
      linkItem,
      { backTo: EVENTS.SHOW_MODAL_SOCIAL_LINK, index, status: 'edit' }
    );
  };

  return (
    <div className={style['social-link-item']}>
      {
        allowSort ? (
          <i className={cls('iconfont-my', 'icon-my-drag', 'icon-drag', 'cursor-grab', 'cursor-[-webkit-grab]')}></i>
        ) : null
      }

      <div className={cls(style['social-link-content'], 'hover-bg')} onClick={onItemClick}>
        <i className={cls('iconfont-social-links', `icon-social-link-${icon}`, style['icon-platform'])}></i>
        <span className={style['social-link-name']}>{name}</span>
        <i className='iconfont-my icon-my-edit'></i>
      </div>

      {/* <Switch isSelected={!isDraft} size='sm' onValueChange={(val) => {
        onDraftChange(val);
      }} /> */}
    </div>
  );
}
