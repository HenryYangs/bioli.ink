'use client'

import { Input } from '@nextui-org/input';
import { useRef, useState } from 'react';

import { KeyCode } from '@/app/types/common';
import { cls } from '@/app/utils/string';

import style from './advanced-input.module.scss';
import { AdvancedInputProps } from './types';

/**
 * 默认是文本，点击后变成 input
 * 暂时放在 my 目录下，其它地方有需要再移出去，因为移出去之后，编辑 icon 也要改
 */
export default function AdvancedInput({
  inputProps,
  className = '',
}: AdvancedInputProps) {
  const { classNames, onBlur, onKeyDown, ...restInputProps } = inputProps;
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
  const onKeyDownHandler = (event: any) => {
    if (event.keyCode === KeyCode.Enter) {
      setIsEdit(false);
    }

    onKeyDown?.(event);
  };

  return (
    <div className={cls(style.wrapper, className)} onClick={onClick}>
      {/* 编辑输入框 */}
      <Input
        size='sm'
        ref={ref}
        {...restInputProps}
        onBlur={(e) => {
          setIsEdit(false);
          onBlur?.(e);
        }}
        placeholder={placeholder}
        classNames={{
          base: style['input-base'],
          inputWrapper: style['input-wrapper'],
          innerWrapper: style['input-inner-wrapper'],
          ...classNames,
        }}
        className={isEdit ? '' : style['hidden-input']}
        onKeyDown={onKeyDownHandler}
      />

      {/* 展示文案 */}
      <div className={cls(style['text-wrapper'], isEdit ? style['hidden-input'] : '')} onClick={onClick}>
        <span className={style['text-placeholder']}>{inputProps.defaultValue || inputProps.value || placeholder}</span>
        <i className={cls('iconfont-my', 'icon-my-edit', style['icon-edit'])}></i>
      </div>
    </div>
  )
};
