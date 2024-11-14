import { Avatar } from '@nextui-org/avatar';

import SocialLinks from '@/app/components/social-links';

import style from './main.module.scss';

export default function BaseInfoMain() {
  const onAvatarClick = () => {
    console.log('onAvatarClick')
  };

  return (
    <div className={style.main}>
      <Avatar size='lg' src='https://i.pravatar.cc/150?u=a04258114e29026302d' onClick={onAvatarClick} className={style.avatar} />

      <div className={style.content}>
        <p className={style.username}>@henryyang</p>
        <p className={style.description}>gagagaggagaagaga</p>

        <SocialLinks links={[]} mode='edit' className={style['social-links']} />
      </div>
    </div>
  );
}
