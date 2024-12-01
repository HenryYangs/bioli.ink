import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useState } from 'react';

import { useUpdateUser } from '@/app/hooks/api/use-update-user';

import style from './unique-username.module.scss';

export default function UniqueUsername() {
  const [username, setUsername] = useState('');
  const { run } = useUpdateUser();

  return (
    <div>
      <Input
        label='用户名'
        description={`你的永久链接：bioli.ink/${username || 'username'}`}
        value={username}
        onValueChange={setUsername}
        maxLength={50}
        endContent={<p className={style.count}>{username.length}/50</p>}
      />

      <Button
        fullWidth
        color='primary'
        className='mt-[10px] btn-main-color'
        onPress={() => run({ username })}
        isDisabled={!Boolean(username.length)}
      >确定</Button>
    </div>
  )
};
