import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import event from '@/app/utils/event';

import style from './info.module.scss';
import { InfoProps } from './types';

export default function Info({ username, intro }: InfoProps) {
  const [name, setName] = useState(username);
  const [introduction, setIntroduction] = useState(intro);

  const onSave = () => {
    event.emit(EVENTS.USERNAME_UPDATE, name);
    event.emit(EVENTS.INTRO_UPDATE, introduction);
    event.emit(EVENTS.HIDE_MODAL);
  };

  return (
    <div className={style.wrapper}>
      <Input
        label='昵称'
        variant='faded'
        value={name}
        onValueChange={setName}
      />

      <Textarea
        disableAutosize
        label='个人简介'
        variant='faded'
        classNames={{
          input: 'resize-y min-h-[40px] max-h-[400px]'
        }}
        value={introduction}
        onValueChange={setIntroduction}
      />

      <Button radius='full' className='btn-main-color' onPress={onSave}>保存</Button>
    </div>
  );
}
