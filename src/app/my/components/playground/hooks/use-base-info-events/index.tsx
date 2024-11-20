import useLatest from 'ahooks/lib/useLatest';
import { useDispatch, useSelector } from 'react-redux';

import { EVENTS } from '@/app/constant/events';
import { useEventListener } from '@/app/hooks/use-event-listener';
import { RootState } from '@/app/my/redux';
import { updateAvatar, updateBio, updateSocialLinks, updateUsername } from '@/app/my/redux/my';
import { SocialLink } from '@/app/types/my';
import event from '@/app/utils/event';

import Info from '../../components/base-info/info';
import PersonalAvatar from '../../components/base-info/personal-avatar';
import AddSocialLink from '../../components/base-info/social-links/add-social-link';
import SocialLinksPanel from '../../components/base-info/social-links/social-links-panel';

/**
 * 统一处理 baseInfo 组件内相关的弹窗
 * 因为弹窗之间可能会相互跳转，统一抽出来维护会更方便一点
 */
export const useBaseInfoEvents = () => {
  const dispatch = useDispatch();
  const { username, bio, socialLinks } = useSelector((root: RootState) => root.my);
  const latestUsername = useLatest(username);
  const latestBio = useLatest(bio);

  const onBaseInfoSave = ({ username, bio }: { username: string; bio: string }) => {
    dispatch(updateUsername(username));
    dispatch(updateBio(bio));
  }

  const onSocialLinkSorted = (newList: SocialLink[]) => {
    dispatch(updateSocialLinks(newList));
  }

  const showModalAvatar = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '个人头像',
      body: <PersonalAvatar onSuccess={(url) => {
        dispatch(updateAvatar(url));
        event.emit(EVENTS.HIDE_MODAL);
      }} />,
      footer: false
    });
  };
  const showModalBaseInfo = () => {
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
  const showModalSocialLink = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '社交平台链接',
      body: <SocialLinksPanel list={socialLinks} setList={onSocialLinkSorted} />,
      footer: false,
    });
  };

  const showModalAddSocialLink = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '添加社交平台链接',
      body: <AddSocialLink />,
      footer: false,
      backTo: EVENTS.SHOW_MODAL_SOCIAL_LINK,
    });
  };

  const showModalAddSocialLinkIcon = (item: SocialLink) => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: `添加${item.name}图标`,
      body: <>112233</>,
      footer: false,
      backTo: EVENTS.SHOW_MODAL_ADD_SOCIAL_LINK,
    });
  };

  useEventListener({
    [EVENTS.SHOW_MODAL_AVATAR]: showModalAvatar,
    [EVENTS.SHOW_MODAL_BASE_INFO]: showModalBaseInfo,
    [EVENTS.SHOW_MODAL_SOCIAL_LINK]: showModalSocialLink,
    [EVENTS.SHOW_MODAL_ADD_SOCIAL_LINK]: showModalAddSocialLink,
    [EVENTS.SHOW_MODAL_ADD_SOCIAL_LINK_ICON]: showModalAddSocialLinkIcon,
  });
}