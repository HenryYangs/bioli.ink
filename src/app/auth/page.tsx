import { Card } from '@nextui-org/card';
import Image from 'next/image';

import Logo from '../components/logo';
import style from './auth.module.scss';
import AuthForm from './components/auth-form';

export default function Auth() {
  return (
    <div className={style.wrapper}>
      <div className={style['auth-image-wrapper']}>
        <Image
          src='http://test-image.bioli.ink/auth-page.png'
          alt='auth'
          width={600}
          height={600}
        />
      </div>

      <Card
        shadow='lg'
        className={style['auth-form']}
      >
        <Logo width={90} height={90} className={style['auth-logo']} />

        <AuthForm />
      </Card>
    </div>
  );
}
