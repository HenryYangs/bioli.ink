'use client'

import { Code } from '@nextui-org/code';
import { useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import { useEventListener } from '@/app/hooks/use-event-listener';
import { TypeColor } from '@/app/types/common';

import style from './alert.module.scss';

export default function Alert() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState('');
  const [type, setType] = useState<TypeColor>('default');

  const onShowAlert = ({ text, color = 'default', duration = 3000 }: { text: string; color?: TypeColor; duration?: number }) => {
    setContent(text);
    setType(color);
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, duration);
  }

  useEventListener(EVENTS.SHOW_ALERT, onShowAlert);

  if (!show) return null;

  return (
    <Code color={type} className={style.wrapper}>{content}</Code>
  )
}
