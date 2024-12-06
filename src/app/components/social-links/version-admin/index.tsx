'use client'

import '@/app/assets/icon/social-link/iconfont.css';

import { Link } from "@nextui-org/link";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DEFAULT_SOCIAL_LINKS, LIST_SOCIAL_LINKS } from '@/app/constant/list/social-links';
import { useUpdateUserConfig } from '@/app/my/hooks/use-update-user-config';
import { RootState } from '@/app/my/redux';
import { updateSocialLinks } from '@/app/my/redux/my';
import { SocialLink } from '@/app/types/my';
import { cls } from '@/app/utils/string';

import Delete from '../../delete';
import style from './social-links.module.scss';
import { SocialLinksProps } from './types';

export default function SocialLinks({
  links,
  className = '',
  onClick,
}: SocialLinksProps) {
  const [renderList, setRenderList] = useState<SocialLink[]>([]);
  const { socialLinks } = useSelector((state: RootState) => state.my);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!links.length) {
      setRenderList(DEFAULT_SOCIAL_LINKS);
    } else {
      setRenderList(links);
    }
  }, [links]);

  const { runAsync: runUpdateUserConfig } = useUpdateUserConfig();
  const onDeleteSocialLink = (index: number) => {
    const copy = [...socialLinks];

    copy.splice(index, 1);
    runUpdateUserConfig({
      platform: JSON.stringify(copy),
    }).then(() => {
      dispatch(updateSocialLinks(copy));
    });
  };

  return (
    <div className={cls(style.wrapper, className)}>
      {
        renderList.map((link, index) => (
          links.length ? (
            <Delete key={link.id} title={`确定删除${link.name}？`} onConfirm={() => onDeleteSocialLink(index)}>
              <Link
                className={style['social-link']}
                color='foreground'
                onPress={() => onClick?.({ item: link, index })}
              >
                <i className={cls('iconfont-social-links', `icon-social-link-${link.icon}`, style['social-link_icon'])}></i>

                {
                  links.length ? null : (
                    <div className={cls(style['add-wrapper'], style['corner-add'])}>
                      <i className={cls('iconfont-my', 'icon-my-plus')}></i>
                    </div>
                  )
                }
              </Link>
            </Delete>
          ) : (
            <Link
              key={link.id}
              className={
                cls(
                  style['social-link'],
                  style['view-mode-text'],
                  link.description ? style['with-desc'] : ''
                )
              }
              style={{
                ...(link.description ? { borderColor: 'var(--main-text-color)' } : {})
              }}
              onPress={() => onClick?.({ item: link, index })}
            >
              <i className={cls('iconfont-social-links', `icon-social-link-${link.icon}`, style['social-link_icon'])}></i>

              {
                link.description ? (
                  <span className={style.description}>{link.description}</span>
                ) : null
              }

              {
                links.length ? null : (
                  <div className={cls(style['add-wrapper'], style['corner-add'])}>
                    <i className={cls('iconfont-my', 'icon-my-plus')}></i>
                  </div>
                )
              }
            </Link>
          )
        ))
      }

      {
        renderList.length === LIST_SOCIAL_LINKS.length ? null : (
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
