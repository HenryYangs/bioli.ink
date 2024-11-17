'use client'

import { Input } from '@nextui-org/input';
import { useRef, useState } from 'react';

import { KeyCode } from '@/app/types/common';

import style from './advanced-input.module.scss';
import { AdvancedInputProps } from './types';
import { cls } from '@/app/utils/string';

/**
 * 默认是文本，点击后变成 input
 * 暂时放在 my 目录下，其它地方有需要再移出去，因为移出去之后，编辑 icon 也要改
 */
export default function AdvancedInput({
  inputProps = {},
  className = '',
}: AdvancedInputProps) {
  const [isEdit, setIsEdit] = useState(false);
  const placeholder = `请输入${inputProps.placeholder}`;
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    setIsEdit(true);
    setTimeout(() => {
      ref.current?.focus();
    }, 0);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onKeyDown = (event: any) => {
    if (event.keyCode === KeyCode.Enter) {
      setIsEdit(false);
    }
  }

  return (
    <div className={cls(style.wrapper, className)}>
      {
        isEdit ? (
          <Input
            size='sm'
            ref={ref}
            onBlur={() => setIsEdit(false)}
            {...inputProps}
            placeholder={placeholder}
            classNames={{
              base: style['input-base'],
              inputWrapper: style['input-wrapper'],
              innerWrapper: style['input-inner-wrapper'],
            }}
            onKeyDown={onKeyDown}
          />
        ) : (
          <div className={style['text-wrapper']} onClick={onClick}>
            <span className={style['text-placeholder']}>{inputProps.value || placeholder}</span>
            <i className={cls('iconfont-my', 'icon-my-edit', style['icon-edit'])}></i>
          </div>
        )
      }
    </div>
  )
};
