import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import event from '@/app/utils/event';

import style from './info.module.scss';
import { InfoProps } from './types';

export default function Info({ username, bio, onSave }: InfoProps) {
  const [name, setName] = useState(username);
  const [introduction, setIntroduction] = useState(bio);

  const onSaveHandler = () => {
    onSave({ username: name, bio: introduction });

    event.emit(EVENTS.HIDE_MODAL);
  };

  return (
    <div className={style.wrapper}>
      <Input
        label='昵称'
        variant='faded'
        value={name}
        onValueChange={setName}
        maxLength={30}
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
        maxLength={99999} // 理论上不去限制长度，但为了安全着想，还是先给一个长度
      />

      <Button radius='full' className='btn-main-color' onPress={onSaveHandler}>保存</Button>
    </div>
  );
}
