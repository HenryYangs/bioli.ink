import { Avatar } from '@nextui-org/avatar';
import { Badge } from '@nextui-org/badge';
import { useLatest } from 'ahooks';
import { useDispatch, useSelector } from 'react-redux';

import Delete from '@/app/components/delete';
import SocialLinks from '@/app/components/social-links';
import { EVENTS } from '@/app/constant/events';
import { useEventListener } from '@/app/hooks/use-event-listener';
import { RootState } from '@/app/my/redux';
import { updateAvatar, updateBio, updateUsername } from '@/app/my/redux/my';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import Info from '../info';
import PersonalAvatar from '../personal-avatar';
import SocialLinksPanel from '../social-links/social-links-panel';
import style from './main.module.scss';

export default function BaseInfoMain({ className = '' }: { className?: string }) {
  const dispatch = useDispatch();
  const { avatar, username, bio } = useSelector((root: RootState) => root.my);
  const latestUsername = useLatest(username);
  const latestBio = useLatest(bio);

  const onAvatarClick = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '个人头像',
      body: <PersonalAvatar onSuccess={(url) => {
        dispatch(updateAvatar(url));
        event.emit(EVENTS.HIDE_MODAL);
      }} />,
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
        content={
          <Delete title='确定删除头像？' />
        }
        color='danger'
        shape='circle'
      >
        <Avatar
          isBordered
          radius='full'
          size='lg'
          src={avatar}
          onClick={onAvatarClick}
          className={style.avatar}
        />
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
