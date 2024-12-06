'use client'

import '@/app/assets/icon/social-link/iconfont.css';

import { Link } from "@nextui-org/link";

import { SocialLink } from '@/app/types/my';
import { cls } from '@/app/utils/string';

import style from './social-links.module.scss';
import { SocialLinksProps } from './types';

export default function SocialLinks({
  links,
  className = '',
}: SocialLinksProps) {
  // TODO 根据具体项的类型决定是跳转链接还是其它形式
  const onClick = (item: SocialLink) => {
    window.open(item.link, '__blank');
  }

  if (!links.length) return null;

  return (
    <div className={cls(style.wrapper, className)}>
      {
        links.map((link) => (
          <Link
            key={link.id}
            className={
              cls(
                style['social-link'],
                link.description ? style['with-desc'] : ''
              )
            }
            style={{
              ...(link.description ? { borderColor: 'var(--main-text-color)' } : {})
            }}
            onPress={() => onClick?.(link)}
          >
            <i className={cls('iconfont-social-links', `icon-social-link-${link.icon}`, style['social-link_icon'])}></i>

            {
              link.description ? (
                <span className={style.description}>{link.description}</span>
              ) : null
            }
          </Link>
        ))
      }
    </div>
  )
}
