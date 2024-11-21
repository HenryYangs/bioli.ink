import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useState } from 'react';

import style from './social-link-input.module.scss';
import { SocialLinkInputProps } from './types';

export default function SocialLinkInput({
  placeholder,
  example,
  onAddSuccess,
}: SocialLinkInputProps) {
  const [link, setLink] = useState('');

  return (
    <div className={style.wrapper}>
      <Input
        variant='bordered'
        label={`请输入${placeholder}`}
        value={link}
        onValueChange={setLink}
      />

      <h6 className={style.example}>示例：{example}</h6>
      
      <Button className='btn-main-color' onPress={() => onAddSuccess(link)}>添加</Button>
    </div>
  );
}
