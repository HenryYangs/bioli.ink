'use client'

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import AdvancedInput from '@/app/my/components/advanced-input';
import { updateUserModule } from '@/app/my/redux/my';

import ModuleTemplate from '../template';
import { TemplateType } from '../types';
import { URLProps } from './types';
import style from './url.module.scss';

export default function URL({
  index,
  ...item
}: URLProps) {
  const dispatch = useDispatch();
  const [hasLinkError, setHasLinkError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onBlurHandler = (key: string, event: any) => {
    dispatch(updateUserModule({
      action: 'update',
      index,
      item: {
        ...item,
        [key]: (event.target as HTMLInputElement).value,
      },
    }));
  };

  return (
    <ModuleTemplate
      index={index}
      type={TemplateType.URL}
      coreContent={
        <div className={style['content-wrapper']}>
          <AdvancedInput
            inputProps={{
              placeholder: '标题',
              defaultValue: item.title,
              onBlur: (event) => {
                onBlurHandler('title', event);
              },
            }}
            className='main-title'
          />
          <AdvancedInput
            inputProps={{
              placeholder: '链接',
              defaultValue: item.url,
              onBlur: (event) => {
                onBlurHandler('url', event);

                const value = (event.target as HTMLInputElement).value;
                const result = value.match(/^http(s)?:\/\/(.*)/);

                setErrorMessage('链接不合法');
                setHasLinkError(!Boolean(result));
              }
            }}
          />
          {/* TODO 样式 */}
          {hasLinkError ? (
            <p className={style['illegal-url']}>{errorMessage}</p>
          ) : null}
        </div>
      }
    >
    </ModuleTemplate>
  )
}
