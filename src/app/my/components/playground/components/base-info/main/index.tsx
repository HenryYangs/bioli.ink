import { Avatar } from '@nextui-org/avatar';
import { useDispatch, useSelector } from 'react-redux';

import Delete from '@/app/components/delete';
import SocialLinks from '@/app/components/social-links';
import { EVENTS } from '@/app/constant/events';
import { RootState } from '@/app/my/redux';
import { updateAvatar } from '@/app/my/redux/my';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import style from './main.module.scss';

export default function BaseInfoMain({ className = '' }: { className?: string }) {
  const dispatch = useDispatch();
  const { avatar, username, bio, socialLinks } = useSelector((root: RootState) => root.my);

  const onDeleteAvatar = () => {
    dispatch(updateAvatar(''));
  }

  return (
    <div className={cls(style.wrapper, className)}>
      <Delete title='确定删除头像？' onConfirm={onDeleteAvatar}>
        <Avatar
          isBordered
          radius='full'
          size='lg'
          src={avatar}
          onClick={() => { event.emit(EVENTS.SHOW_MODAL_AVATAR) }}
          className={style.avatar}
        />
      </Delete>

      <div className={style.content}>
        <p className={style.username} onClick={() => { event.emit(EVENTS.SHOW_MODAL_BASE_INFO) }}>@{username}</p>
        {
          bio ? <p className={style.bio} onClick={() => { event.emit(EVENTS.SHOW_MODAL_BASE_INFO) }}>{bio}</p> : null
        }

        <SocialLinks
          mode='edit'
          align='left'
          className={style['social-links']}
          links={socialLinks}
          onClick={() => { event.emit(EVENTS.SHOW_MODAL_SOCIAL_LINK) }}
        />
      </div>
    </div>
  );
}
