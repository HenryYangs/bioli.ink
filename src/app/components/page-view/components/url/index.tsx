import { Card, CardBody } from '@nextui-org/card';

import { URLProps } from './types';
import style from './url.module.scss';

export default function URL({
  title,
  link
}: URLProps) {
  return (
    <Card className={style.wrapper}>
      <CardBody className={style['plain-url-wrapper']}>
        {
          link ? (
            <a href={link} className={style.url} target='_blank' rel='noreferrer noopener'>{title}</a>
          ) : <span className={style.url}>{title}</span>
        }
      </CardBody>
    </Card>
  )
}
