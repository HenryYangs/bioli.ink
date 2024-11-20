/**
 * 项目的核心展示组件
 * 1. 用户设计页的预览
 * 2. 用户最终页面的展示
 */
import { Avatar } from '@nextui-org/avatar';

import { SocialPlatform } from '@/app/types/my';
import { cls } from '@/app/utils/string';

import FooterLogo from '../footer-logo';
import SocialLinks from '../social-links';
import URL from './components/url';
import style from './page-view.module.scss';
import { PageViewProps } from './types';

export default function PageView({
  avatar,
  username,
  bio,
  className = ''
}: PageViewProps) {
  return (
    <main className={cls(style.wrapper, className)}
      style={{
        background: ''
      }}
    >
      <div className={style['inner-wrapper']}>
        <section className={style['base-info']}>
          <Avatar
            isBordered
            className={style.avatar}
            src={avatar}
          />

          <p className={style.username}>{username}</p>

          {/* TODO 处理换行，最大宽度 */}
          {
            bio ? (
              <div className={style.bio}>{bio}</div>
            ) : null
          }

          <SocialLinks
            className={style['social-links']}
            links={[
              SocialPlatform.ALI_PAY, SocialPlatform.ALI_WANG_WANG, SocialPlatform.AMAZON,
              SocialPlatform.APPLE_APP_STORE, SocialPlatform.APPLE_MUSIC, SocialPlatform.APPLE_PODCASTS, SocialPlatform.ART_STATION, SocialPlatform.BAI_HE, SocialPlatform.BANDCAMP, SocialPlatform.BAO_BAO_SHU, SocialPlatform.BEHANCE, SocialPlatform.TANG_DOU, SocialPlatform.DING_TALK
            ]}
          />
        </section>

        <section className={style['user-modules']}>
          <URL />
          <URL />
          <URL />
          <URL />
          <URL />
        </section>

        <FooterLogo className={style['footer-logo']} />
      </div>
    </main>
  )
}
