'use client'

import '@/app/assets/icon/social-link/iconfont.css';

import { Link } from "@nextui-org/link";
import { useEffect, useState } from 'react';

import { DEFAULT_SOCIAL_LINKS, LIST_SOCIAL_LINKS } from '@/app/constant/list/social-links';
import { SocialLinkItem } from '@/app/types/my';
import { cls } from '@/app/utils/string';

import style from './social-links.module.scss';
import { SocialLinksProps } from './types';

export default function SocialLinks({
  links,
  mode = 'view',
  className = '',
  align = 'center',
  onClick,
}: SocialLinksProps) {
  const isEdit = mode === 'edit';
  const [renderList, setRenderList] = useState<SocialLinkItem[]>([]);

  useEffect(() => {
    if (!links.length && isEdit) {
      setRenderList(DEFAULT_SOCIAL_LINKS);
    } else {
      setRenderList(LIST_SOCIAL_LINKS.filter(link => links.includes(link.id)));
    }
  }, [links]);

  return (
    <div
      className={cls(style.wrapper, className)}
      style={{
        justifyContent: align,
      }}
    >
      {
        renderList.map(link => (
          <Link
            key={link.id}
            className={style['social-link']}
            color='foreground'
            onPress={() => onClick?.(link)}
          >
            <i className={cls('iconfont-social-links', `icon-social-link-${link.icon}`, style['social-link_icon'])}></i>

            {
              (isEdit && !links.length) ? (
                <div className={cls(style['add-wrapper'], style['corner-add'])}>
                  <i className={cls('iconfont-my', 'icon-my-plus')}></i>
                </div>
              ) : null
            }
          </Link>
        ))
      }

      {
        (!isEdit || renderList.length === LIST_SOCIAL_LINKS.length) ? null : (
          <div
            className={cls(style['add-wrapper'], style['tail-add'])}
            onClick={() => onClick?.()}
          >
            <i className={cls('iconfont-my', 'icon-my-plus')}></i>
          </div>
        )
      }
    </div>
  )
}
