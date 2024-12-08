import { ReactSortable } from '@miestasmia/react-sortablejs';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ModuleStatus, UserModule } from '@/app/types/my/module';
import { parseJSON } from '@/app/utils/transform';
import { addTsAfterUrl } from '@/app/utils/url';

import { useQueryModule, useUpdateModule } from '../../hooks/use-module';
import { useUserConfig } from '../../hooks/use-user-config';
import { RootState } from '../../redux';
import { updateUniqueId } from '../../redux/base';
import { updateAvatar, updateBio, updateSocialLinks, updateUserModule, updateUsername } from '../../redux/my';
import AddModule from './components/add-module';
import BaseInfo from './components/base-info';
import URL from './components/modules-factory/url';
import MyLink from './components/my-link';
import Preview from './components/preview';
// import StyleSettings from './components/style-settings';
import style from './playground.module.scss';

export default function Playground() {
  const { userModules } = useSelector((state: RootState) => state.my);
  const renderList = useMemo(() => {
    return userModules.modules.filter(module => module.status !== ModuleStatus.DELETED);
  }, [userModules.modules]);
  const dispatch = useDispatch();

  const setUserModules = (list: UserModule[]) => {
    dispatch(updateUserModule({ list }));
  };

  useUserConfig({
    onSuccess: (response) => {
      dispatch(updateUniqueId(response.id));
      dispatch(updateUsername(response.baseConfig.name || response.username));
      dispatch(updateBio(response.baseConfig.bio || ''));
      dispatch(updateAvatar(addTsAfterUrl(response.baseConfig.avatar)));
      dispatch(updateSocialLinks(parseJSON(response.baseConfig.platform || '[]')));
    },
  });

  const { runAsync: runQueryModule } = useQueryModule();

  useEffect(() => {
    runQueryModule()
      .then(response => {
        dispatch(updateUserModule({
          id: response.id,
          list: parseJSON(response.json),
        }));
      })
  }, []);

  const { run: runUpdateModule } = useUpdateModule();

  useEffect(() => {
    if (!userModules.id) return;

    // TODO 拖拽组件的问题，导致请求有点多，后面需要专项优化一下
    runUpdateModule({
      id: userModules.id,
      json: JSON.stringify(userModules.modules),
    });
  }, [userModules]);

  return (
    <div className={style.wrapper}>
      <main className={style['action-wrapper']}>
        <div className={style['action-inner-wrapper']}>
          <MyLink />

          <BaseInfo />

          {/* TODO */}
          {/* <StyleSettings /> */}

          <AddModule />

          <ReactSortable
            handle='.template-drag-icon'
            ghostClass='drag-ghost'
            chosenClass='drag-chosen'
            animation={200}
            list={renderList}
            setList={setUserModules}
            className={style.modules}
          >
            {
              renderList.map((item, index) => {
                return <URL index={index} key={item.id} {...item} />;
              })
            }
          </ReactSortable>
        </div>
      </main>

      <Preview />
    </div>
  );
}
