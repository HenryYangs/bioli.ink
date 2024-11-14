import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';

import SocialLinks from '@/app/components/social-links';
import { cls } from '@/app/utils/string';

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

        <section className={style['add-module']}>
          <Button className={style['add-link']}>
            <i className={cls('iconfont', 'icon-my-plus', style['add-link_icon'])}></i>
            <span>添加链接</span>
          </Button>

          <Button className={style['add-other-module']}>添加其它模块</Button>
        </section>

        <section className={style.modules}>
          
        </section>
      </main>

      <section className={style['right-wrapper']}>

      </section>
    </div>
  );
}
