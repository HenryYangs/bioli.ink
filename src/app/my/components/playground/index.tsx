import { Avatar } from '@nextui-org/avatar';

import SocialLinks from '@/app/components/social-links';

import BaseInfoEdit from './components/base-info-edit';
import style from './playground.module.scss';

export default function Playground() {
  return (
    <div className={style.wrapper}>
      <main className={style['action-wrapper']}>
        <section className={style['base-info']}>
          <div className={style['base-info_main']}>
            <Avatar size='lg' src='https://i.pravatar.cc/150?u=a04258114e29026302d' />

            <div className={style['base-info_content']}>
              <p className={style['base-info_username']}>@henryyang</p>
              <p className={style['base-info_description']}>gagagaggagaagaga</p>

              <SocialLinks links={[]} mode='edit' className={style['base-info_social-links']} />
            </div>
          </div>

          <BaseInfoEdit />
        </section>
      </main>

      <section className={style['right-wrapper']}>

      </section>
    </div>
  );
}
