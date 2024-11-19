import { useSelector } from 'react-redux';

import PageView from '@/app/components/page-view';
import { RootState } from '@/app/my/redux';

import style from './preview.module.scss';

export default function Preview() {
  const { username, bio } = useSelector((root: RootState) => root.my);

  return (
    <section className={style['preview-wrapper']}>
      <div className={style['preview-inner-wrapper']}>
        <div className={style['preview-device-wrapper']}
          // TODO 支持不同尺寸屏幕
        >
          <PageView
            className={style['page-view']}
            username={username}
            bio={bio}
          />
        </div>
      </div>
    </section>
  );
}
