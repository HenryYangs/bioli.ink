'use client'

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useState } from 'react';

import style from './auth-form.module.scss';

export default function AuthForm() {
  const [status, setStatus] = useState<'register' | 'login'>('register');
  const [phone, setPhone] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const isRegister = status === 'register';

  const onSubmit = () => {
    if (isRegister) {

    } else {

    }
  };

  return (
    <main className={style.wrapper}>
      <section className={style.upper}>
        <h1 className={style.title}>
          { isRegister ? '欢迎加入！' : '欢迎回来!' }
        </h1>

        <h4 className={style['sub-title']}>
          { isRegister ? '只需 1 分钟，领取你的永久专属链接' : '登录 bioli.ink，连接你的所有链接' }
        </h4>

        <div className={style['form-wrapper']}>
          <Input
            variant='underlined'
            placeholder='手机号'
            type='text'
            value={phone}
            onValueChange={(value) => {
              setPhone(value);
            }}
          />
          <Input
            variant='underlined'
            placeholder='验证码'
            type='text'
            value={verifyCode}
            onValueChange={(value) => {
              setVerifyCode(value);
            }}
            endContent={
              <Button size='sm' color='primary'>获取验证码</Button>
            }
          />
        </div>

        {/* <Checkbox defaultSelected>
          Remember for 30 days
        </Checkbox> */}

        <Button
          fullWidth
          className={style['btn-submit']}
          color='primary'
          onPress={onSubmit}
        >{isRegister ? '注册' : '登录' }</Button>
      </section>

      <p className={style.lower}>
        {isRegister ? '已' : '没'}有 bioli.ink 账户？去<Button variant='light' color='primary' size='md' className={style['btn-status']} onPress={() => { setStatus(isRegister ? 'login' : 'register') }}>{isRegister ? '登录' : '注册'}</Button>
      </p>
    </main>
  );
}
