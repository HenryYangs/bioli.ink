import { Avatar } from '@nextui-org/avatar';
import { Badge } from '@nextui-org/badge';
import { useLatest } from 'ahooks';
import { useDispatch, useSelector } from 'react-redux';

import SocialLinks from '@/app/components/social-links';
import { EVENTS } from '@/app/constant/events';
import { useEventListener } from '@/app/hooks/use-event-listener';
import { RootState } from '@/app/my/redux';
import { updateBio, updateUsername } from '@/app/my/redux/my';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import Info from '../info';
import PersonalAvatar from '../personal-avatar';
import SocialLinksPanel from '../social-links/social-links-panel';
import style from './main.module.scss';

export default function BaseInfoMain({ className = '' }: { className?: string }) {
  const dispatch = useDispatch();
  const { username, bio } = useSelector((root: RootState) => root.my);
  const latestUsername = useLatest(username);
  const latestBio = useLatest(bio);

  const onAvatarClick = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '个人头像',
      body: <PersonalAvatar />,
      footer: false
    });
  };

  const onBaseInfoSave = ({ username, bio }: { username: string; bio: string }) => {
    dispatch(updateUsername(username));
    dispatch(updateBio(bio));
  }

  const onBaseInfoEdit = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '昵称和简介',
      body: (
        <Info
          username={latestUsername.current}
          bio={latestBio.current}
          onSave={onBaseInfoSave}
        />
      ),
      footer: false,
    });
  };

  const onSocialLinkClick = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '社交平台链接',
      body: <SocialLinksPanel />,
      footer: false,
    });
  };

  useEventListener({
    [EVENTS.AVATAR_CLICK]: onAvatarClick,
    [EVENTS.USERNAME_INTRO_CLICK]: onBaseInfoEdit,
  });

  return (
    <div className={cls(style.wrapper, className)}>
      <Badge
        isOneChar
        content={<i className={cls('iconfont-my', 'icon-my-delete', style['icon-delete'])}></i>}
        color='danger'
        shape='circle'
        className={style['avatar-delete']}
      >
        <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026302d' onClick={onAvatarClick} className={style.avatar} />
      </Badge>

      <div className={style.content}>
        <p className={style.username} onClick={onBaseInfoEdit}>@{username}</p>
        <p className={style.description} onClick={onBaseInfoEdit}>{bio}</p>

        <SocialLinks
          mode='edit'
          align='left'
          className={style['social-links']}
          links={[]}
          onClick={onSocialLinkClick}
        />
      </div>
    </div>
  );
}
