import { useSelector } from 'react-redux';

import PageView from '@/app/components/page-view';
import { RootState } from '@/app/my/redux';
import { ModuleStatus } from '@/app/types/my/module';

import style from './preview.module.scss';

export default function Preview() {
  const { avatar, username, bio, socialLinks, userModules } = useSelector((root: RootState) => root.my);

  return (
    <section className={style['preview-wrapper']}>
      <div className={style['preview-inner-wrapper']}>
        <div className={style['preview-device-wrapper']}
          // TODO 支持不同尺寸屏幕
        >
          <PageView
            className={style['page-view']}
            avatar={avatar}
            username={username}
            bio={bio}
            socialLinks={socialLinks}
            userModules={userModules.modules.filter(module => module.status !== ModuleStatus.DELETED)}
          />
        </div>
      </div>
    </section>
  );
}
