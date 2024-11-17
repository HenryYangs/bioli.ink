'use client'

import { useState } from 'react';

import AdvancedInput from '@/app/my/components/advanced-input';

import ModuleTemplate from '../template';
import { TemplateType } from '../types';
import style from './url.module.scss';

export default function URL() {
  const [title, setTitle] = useState('哈哈哈哈哈');

  return (
    <ModuleTemplate
      type={TemplateType.URL}
      coreContent={
        <div className={style['content-wrapper']}>
          <AdvancedInput
            inputProps={{
              value: title,
              placeholder: '标题'
            }}
            className='main-title'
          />
          <AdvancedInput
            inputProps={{
              value: title,
              placeholder: '链接'
            }}
          />
        </div>
      }
    >
    </ModuleTemplate>
  )
}
