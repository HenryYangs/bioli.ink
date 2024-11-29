'use client'

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import useCountDown from 'ahooks/lib/useCountDown';
import { useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import event from '@/app/utils/event';
import { prezero } from '@/app/utils/number';

import style from './auth-form.module.scss';
import { useLogin } from './hooks/use-login';
import { useRegister } from './hooks/use-register';
import { useVerifyCode } from './hooks/use-verify-code';

export default function AuthForm() {
  const [status, setStatus] = useState<'register' | 'login'>('register');
  const [mobile, setMobile] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false);
  const [isVerifyCodeInvalid, setIsVerifyCodeInvalid] = useState(false);
  const [verifyCodeDisabled, setVerifyCodeDisabled] = useState(false);
  const isRegister = status === 'register';

  const [targetDate, setTargetDate] = useState<number>();
  const [, countdownResp] = useCountDown({
    targetDate,
    onEnd: () => {
      setVerifyCodeDisabled(false);
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const { runAsync: runVerifyCode, loading: loadingVerifyCode } = useVerifyCode();
  const { runAsync: runRegister } = useRegister();
  const { runAsync: runLogin } = useLogin();

  const getVerifyCode = () => {
    if (loadingVerifyCode) return;

    if (!mobile) {
      setIsPhoneInvalid(true);
      return;
    }

    runVerifyCode({ mobile })
      .then(() => {
        event.emit(EVENTS.SHOW_ALERT, {
          text: '验证码已发送，请查收',
          color: 'success',
        });
        setTargetDate(Date.now() + 60 * 1000);
        setVerifyCodeDisabled(true);
      })
  }

  const onSubmit = () => {
    let hasInvalid = false;

    if (!mobile) {
      setIsPhoneInvalid(true);
      hasInvalid = true;
    }

    if (!verifyCode) {
      setIsVerifyCodeInvalid(true);
      hasInvalid = true;
    }

    if (hasInvalid) {
      return;
    }

    setIsLoading(true);

    if (isRegister) {
      runRegister({
        mobile,
        verifyCode,
      })
        .then(() => {
          event.emit(EVENTS.SHOW_ALERT, {
            text: '注册成功！',
            color: 'success',
          });
          setTimeout(() => {
            location.href = '/my'
          }, 2000);
        })
        .catch(() => {
          setIsLoading(false);
        })
    } else {
      runLogin({
        mobile,
        verifyCode
      })
        .then(() => {
          event.emit(EVENTS.SHOW_ALERT, {
            text: '登录成功！',
            color: 'success',
          });
          setTimeout(() => {
            location.href = '/my'
          }, 2000);
        })
        .catch(() => {
          setIsLoading(false);
        })
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
            value={mobile}
            onValueChange={(value) => {
              setMobile(value);
              setIsPhoneInvalid(false);
            }}
            isInvalid={isPhoneInvalid}
            errorMessage='请填写正确的手机号'
          />
          <Input
            variant='underlined'
            placeholder='验证码'
            type='text'
            value={verifyCode}
            onValueChange={(value) => {
              setVerifyCode(value);
              setIsVerifyCodeInvalid(false);
            }}
            endContent={
              <Button
                size='sm'
                color='primary'
                isLoading={loadingVerifyCode}
                isDisabled={verifyCodeDisabled}
                onPress={getVerifyCode}
              >{verifyCodeDisabled ? `${prezero(countdownResp.seconds)}秒` : '获取验证码'}</Button>
            }
            isInvalid={isVerifyCodeInvalid}
            errorMessage='请填写正确的验证码'
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
          isLoading={isLoading}
          isDisabled={isLoading}
        >{isRegister ? '注册' : '登录' }</Button>
      </section>

      <p className={style.lower}>
        {isRegister ? '已' : '没'}有 bioli.ink 账户？去<Button variant='light' color='primary' size='md' className={style['btn-status']} onPress={() => { setStatus(isRegister ? 'login' : 'register') }}>{isRegister ? '登录' : '注册'}</Button>
      </p>
    </main>
  );
}
