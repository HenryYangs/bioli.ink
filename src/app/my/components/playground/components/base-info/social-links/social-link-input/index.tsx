import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useState } from 'react';

import style from './social-link-input.module.scss';
import { SocialLinkInputProps } from './types';

export default function SocialLinkInput({
  defaultLink = '',
  defaultDescription = '',
  placeholder,
  example,
  onAddSuccess,
}: SocialLinkInputProps) {
  const [link, setLink] = useState(defaultLink);
  const [description, setDescription] = useState(defaultDescription);
  const [isInvalid, setIsInvalid] = useState(false);

  const onLinkChange = (newValue: string) => {
    setLink(newValue);
    setIsInvalid(false);
  }

  const onAdd = () => {
    if (link) {
      onAddSuccess({ link, description });
      return;
    }

    setIsInvalid(true);
  };

  return (
    <div className={style.wrapper}>
      <Input
        variant='bordered'
        label={`请输入${placeholder}`}
        value={link}
        onValueChange={onLinkChange}
        isRequired
        isInvalid={isInvalid}
        errorMessage='请输入链接'
      />

      <h6 className={style.example}>示例：{example}</h6>

      <Input
        variant='bordered'
        label='请输入描述'
        value={description}
        onValueChange={setDescription}
      />
      
      <Button className='btn-main-color' onPress={onAdd}>添加</Button>
    </div>
  );
}
