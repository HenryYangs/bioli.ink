import useLatest from 'ahooks/lib/useLatest';
import { useDispatch, useSelector } from 'react-redux';

import { EVENTS } from '@/app/constant/events';
import { useEventListener } from '@/app/hooks/use-event-listener';
import { useUpdateUserConfig } from '@/app/my/hooks/use-update-user-config';
import { RootState } from '@/app/my/redux';
import { updateAvatar, updateBio, updateSocialLinks, /* updateSocialLinksPosition, */updateUsername } from '@/app/my/redux/my';
import { SocialLink } from '@/app/types/my';
import event from '@/app/utils/event';
import { addTsAfterUrl } from '@/app/utils/url';

import Info from '../../components/base-info/info';
import PersonalAvatar from '../../components/base-info/personal-avatar';
import AddSocialLink from '../../components/base-info/social-links/add-social-link';
import SocialLinkInput from '../../components/base-info/social-links/social-link-input';
import SocialLinksPanel from '../../components/base-info/social-links/social-links-panel';

/**
 * 统一处理 baseInfo 组件内相关的弹窗
 * 因为弹窗之间可能会相互跳转，统一抽出来维护会更方便一点
 */
export const useBaseInfoEvents = () => {
  const dispatch = useDispatch();
  const { uniqueId } = useSelector((root: RootState) => root.base);
  const { username, bio, socialLinks, /* socialLinksPosition */ } = useSelector((root: RootState) => root.my);
  
  const latestUniqueId = useLatest(uniqueId);
  const latestUsername = useLatest(username);
  const latestBio = useLatest(bio);
  const latestSocialLinks = useLatest(socialLinks);
  // const latestSocialLinksPosition = useLatest(socialLinksPosition);

  const { runAsync: runAsyncUpdateUserConfig } = useUpdateUserConfig();

  const onBaseInfoSave = ({ username, bio }: { username: string; bio: string }) => {
    dispatch(updateUsername(username));
    dispatch(updateBio(bio));
    runAsyncUpdateUserConfig({
      name: username, bio,
    });
  };

  const onAddSocialLink = (item: SocialLink) => {
    const copy = [...latestSocialLinks.current, item];

    dispatch(updateSocialLinks(copy));
    runAsyncUpdateUserConfig({ platform: JSON.stringify(copy) });
  };

  const onEditSocialLink = (index: number, item: SocialLink) => {
    const copy = [...latestSocialLinks.current];

    copy.splice(index, 1, item);
    dispatch(updateSocialLinks(copy));
    runAsyncUpdateUserConfig({ platform: JSON.stringify(copy) });
  };

  const showModalAvatar = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '个人头像',
      body: <PersonalAvatar userId={latestUniqueId.current} onSuccess={(url) => {
        dispatch(updateAvatar(addTsAfterUrl(url)));
        runAsyncUpdateUserConfig({ avatar: url })
          .then(() => {
            event.emit(EVENTS.SHOW_ALERT, {
              text: '修改头像成功！',
              color: 'success',
            });
          });
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
      body: (
        <SocialLinksPanel
          list={latestSocialLinks.current}
          onSortUpdate={(newIndex, oldIndex) => {
            if (newIndex === undefined || oldIndex === undefined) return;

            const copy = [...latestSocialLinks.current];
            const targetItem = copy.splice(oldIndex, 1);

            copy.splice(newIndex, 0, targetItem[0]);
            dispatch(updateSocialLinks(copy));
          }}
          // position={latestSocialLinksPosition.current}
          // onPositionChange={(newVal) => {
          //   if (!newVal) return;

          //   dispatch(updateSocialLinksPosition(newVal));
          // }}
          // onDraftChange={(value, index) => {
          //   if (value === undefined || index === undefined) return;

          //   const copy = [...latestSocialLinks.current];

          //   copy[index].isDraft = value;
          //   dispatch(updateSocialLinks(copy));
          // }}
        />
      ),
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

  const showModalSocialLinkIcon = (
    item: SocialLink,
    options?: {
      backTo?: EVENTS,
      status?: 'create' | 'edit',
      index?: number,
    },
  ) => {

    event.emit(EVENTS.SHOW_MODAL, {
      title: `${options?.status === 'edit' ? '编辑' : '添加'}${item.name}图标`,
      body: (
        <SocialLinkInput
          placeholder='' // TODO
          example='' // TODO
          defaultLink={item.link}
          defaultDescription={item.description}
          status={options?.status}
          onAdd={(info) => {
            onAddSocialLink({
              ...item,
              ...info,
            });
            event.emit(EVENTS.HIDE_MODAL);
          }}
          onEdit={(info) => {
            onEditSocialLink(options?.index || -1, {
              ...item,
              ...info
            });
            event.emit(EVENTS.HIDE_MODAL);
          }}
        />
      ),
      footer: false,
      backTo: options?.backTo || EVENTS.SHOW_MODAL_ADD_SOCIAL_LINK,
    });
  };

  useEventListener({
    [EVENTS.SHOW_MODAL_AVATAR]: showModalAvatar,
    [EVENTS.SHOW_MODAL_BASE_INFO]: showModalBaseInfo,
    [EVENTS.SHOW_MODAL_SOCIAL_LINK]: showModalSocialLink,
    [EVENTS.SHOW_MODAL_ADD_SOCIAL_LINK]: showModalAddSocialLink,
    [EVENTS.SHOW_MODAL_SOCIAL_LINK_ICON]: showModalSocialLinkIcon,
  });
}