import { Suspense } from 'react';

import { getClientUserInfo } from '../api/user';
import PageView from '../components/page-view';
import { parseJSON } from '../utils/transform';
import style from './username.module.scss';

export default async function Slug({ params }: { params: { username: string } }) {
  const data = await getClientUserInfo(params.username);

  // TODO 跳转 404
  if (!data) return null;

  return (
    <Suspense fallback={<div>loading</div>}>
      <div className={style.wrapper}>
        <main className={style['main-content']}>
          <PageView
            avatar={data.baseConfig.avatar}
            username={data.baseConfig.name || data.username}
            bio={data.baseConfig.bio || ''}
            socialLinks={parseJSON(data.baseConfig.platform || '[]')}
            userModules={data.modules.list}
          />
        </main>
      </div>
    </Suspense>
  );
}
