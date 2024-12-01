import { ReactSortable } from '@miestasmia/react-sortablejs';
import { useDispatch, useSelector } from 'react-redux';

import { UserModule } from '@/app/types/my/module';
import { parseJSON } from '@/app/utils/transform';
import { addTsAfterUrl } from '@/app/utils/url';

import { useUserConfig } from '../../hooks/use-user-config';
import { RootState } from '../../redux';
import { updateUniqueId } from '../../redux/base';
import { resetUserModules, updateAvatar, updateBio, updateSocialLinks, updateUsername } from '../../redux/my';
import AddModule from './components/add-module';
import BaseInfo from './components/base-info';
import URL from './components/modules-factory/url';
import Preview from './components/preview';
// import StyleSettings from './components/style-settings';
import style from './playground.module.scss';

export default function Playground() {
  const { userModules } = useSelector((state: RootState) => state.my);
  const dispatch = useDispatch();

  const setUserModules = (list: UserModule[]) => {
    dispatch(resetUserModules(list));
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

  return (
    <div className={style.wrapper}>
      <main className={style['action-wrapper']}>
        <div className={style['action-inner-wrapper']}>
          <BaseInfo />

          {/* TODO */}
          {/* <StyleSettings /> */}

          <AddModule />

          <ReactSortable
            handle='.template-drag-icon'
            ghostClass='drag-ghost'
            chosenClass='drag-chosen'
            animation={200}
            list={userModules.map(module => ({
              ...module,
              id: module['data-id']
            }))}
            setList={setUserModules}
            className={style.modules}
          >
            {
              userModules.map((item, index) => {
                return <URL index={index} key={item['data-id']} {...item} />;
              })
            }
          </ReactSortable>
        </div>
      </main>

      <Preview />
    </div>
  );
}
