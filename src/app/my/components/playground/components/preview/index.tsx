import PageView from '@/app/components/page-view';

import style from './preview.module.scss';

export default function Preview() {
  return (
    <section className={style['preview-wrapper']}>
      <div className={style['preview-inner-wrapper']}>
        <div className={style['preview-device-wrapper']}
          // TODO 支持不同尺寸屏幕
        >
          <PageView className={style['page-view']} />
        </div>
      </div>
    </section>
  );
}
