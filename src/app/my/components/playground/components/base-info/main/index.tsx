import { Avatar } from '@nextui-org/avatar';
import { Badge } from '@nextui-org/badge';
import { useState } from 'react';

import SocialLinks from '@/app/components/social-links';
import { EVENTS } from '@/app/constant/events';
import { useEventListener } from '@/app/hooks/use-event-listener';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import Info from '../info';
import PersonalAvatar from '../personal-avatar';
import style from './main.module.scss';

export default function BaseInfoMain() {
  const [username, setUsername] = useState('henryyang');
  const [intro, setIntro] = useState('');

  const onAvatarClick = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '个人头像',
      body: <PersonalAvatar />,
      footer: false
    });
  };

  const onBaseInfoEdit = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '昵称和简介',
      body: <Info username={username} intro={intro} />,
      footer: false,
    });
  };

  useEventListener({
    [EVENTS.USERNAME_UPDATE]: setUsername,
    [EVENTS.INTRO_UPDATE]: setIntro,
  });

  return (
    <div className={style.main}>
      <Badge
        isOneChar
        content={<i className={cls('iconfont', 'icon-my-delete', style['icon-delete'])}></i>}
        color='danger'
        shape='circle'
        className={style['avatar-delete']}
      >
        <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026302d' onClick={onAvatarClick} className={style.avatar} />
      </Badge>

      <div className={style.content}>
        <p className={style.username} onClick={onBaseInfoEdit}>@{username}</p>
        <p className={style.description} onClick={onBaseInfoEdit}>{intro}</p>

        <SocialLinks links={[]} mode='edit' className={style['social-links']} />
      </div>
    </div>
  );
}
