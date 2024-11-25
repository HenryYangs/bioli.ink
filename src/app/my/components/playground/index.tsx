import { ReactSortable } from '@miestasmia/react-sortablejs';
import { useDispatch, useSelector } from 'react-redux';

import { UserModule } from '@/app/types/my/module';

import { RootState } from '../../redux';
import { resetUserModules } from '../../redux/my';
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
  }
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
