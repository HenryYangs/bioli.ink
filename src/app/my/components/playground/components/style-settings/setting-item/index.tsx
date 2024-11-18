import { Card, CardBody } from '@nextui-org/card';

import style from './setting-item.module.scss';
import { SettingItemProps } from './types';

export default function SettingItem({
  title,
  content
}: SettingItemProps) {
  return (
    <Card radius='sm' shadow='none'>
      <CardBody className={style.wrapper}>
        <div className={style.title}>{title}</div>
        <div className={style.content}>{content}</div>
      </CardBody>
    </Card>
  )
}
