import { Button } from '@nextui-org/button';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { useState } from 'react';

import { cls } from '@/app/utils/string';

import style from './content.module.scss';
import { ContentProps } from './types';

export default function Content(props: ContentProps = {}) {
  const { title, triggerCls = '', onConfirm } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onConfirmHandler = () => {
    onConfirm?.();
    setIsOpen(false);
  };

  return (
    <Popover
      isOpen={isOpen}
      placement='bottom'
      showArrow={true}
      onOpenChange={open => setIsOpen(open)}
    >
      <PopoverTrigger>
        {/* TODO 这里要考虑 icon 是否要提到 common 里 */}
        <i className={cls('iconfont-my', 'icon-my-delete', style['icon-delete'], triggerCls)}></i>
      </PopoverTrigger>

      <PopoverContent className={style['delete-content']}>
        <p>{title || '确定删除？'}</p>

        <div className={style['btn-group']}>
          <Button size='sm' variant='ghost' onPress={() => setIsOpen(false)}>取消</Button>
          <Button size='sm' color='danger' onPress={onConfirmHandler}>确定</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
