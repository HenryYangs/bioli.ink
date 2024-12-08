import { Card, CardBody } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import useLatest from 'ahooks/lib/useLatest';
import Clipboard from 'clipboard';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { EVENTS } from '@/app/constant/events';
import { RootState } from '@/app/my/redux';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import style from './my-link.module.scss';

export default function MyLink() {
  const { username } = useSelector((root: RootState) => root.my);
  const [permanentLink, setPermanentLink] = useState('');
  const latestPermanentLink = useLatest(permanentLink);

  useEffect(() => {
    setPermanentLink(`${location.protocol}//${location.host}/${username}`);
  }, [username]);
  
  useEffect(() => {
    const clipboard = new Clipboard('#copyLink', {
      text: () => {
        return latestPermanentLink.current;
      },
    });

    clipboard.on('success', () => {
      event.emit(EVENTS.SHOW_ALERT, {
        text: '复制成功',
        color: 'success',
      });
    });

    clipboard.on('error', () => {
      event.emit(EVENTS.SHOW_ALERT, {
        text: '复制失败',
        color: 'danger',
      });
    });
  }, []);

  return (
    <Card shadow='none'>
      <CardBody className={style.wrapper}>
        <div className={style['inner-wrapper']}>
          <span>我的永久链接：</span>

          {
            username ? (
              <>
                <Link
                  isExternal
                  color='danger'
                  underline='hover'
                  href={permanentLink}
                >{permanentLink}</Link>
      
                <i className={cls('iconfont-my', 'icon-my-copy', style['icon-copy'])} id='copyLink'></i>
              </>
            ) : null
          }
        </div>
      </CardBody>
    </Card>
  )
}