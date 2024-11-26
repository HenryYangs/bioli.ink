import { Card } from '@nextui-org/card';
import Image from 'next/image';

import style from './auth.module.scss';
import AuthForm from './components/auth-form';

export default function Auth() {
  return (
    <div className={style.wrapper}>
      <Image src='' alt='' className={style['auth-image']} />

      <Card
        shadow='lg'
        className={style['auth-form']}
      >
        <Image src='' alt='logo' className={style['auth-logo']} />

        <AuthForm />
      </Card>
    </div>
  );
}
