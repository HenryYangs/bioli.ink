import { ReactSortable } from '@miestasmia/react-sortablejs';
import { Button } from '@nextui-org/button';
// import { Radio, RadioGroup } from "@nextui-org/radio";
import { useState } from 'react';

import { EVENTS } from '@/app/constant/events';
// import { SocialLinksPosition } from '@/app/my/redux/my';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import SocialLinkItem from '../social-link-item';
import style from './social-links-panel.module.scss';
import { SocialLinksPanelProps } from './types';

export default function SocialLinksPanel({
  list,
  // position,
  onSortUpdate,
  // onPositionChange,
  // onDraftChange,
}: SocialLinksPanelProps) {
  /**
   * 由于当前组件是在弹窗中使用的，已经脱离了 redux 的数据流
   * 因此传入的参数都是 useRef 的变量
   * 在组件内部需要用 useState 再包裹一层
   */
  const [ state, setState ] = useState(list);
  // const [ socialLinkPosition, setSocialLinkPosition ] = useState(position);

  return (
    <div className={style.wrapper}>
      <p className='main-title'>通过配置社交平台链接，告诉大家在哪可以找到你~</p>

      <main id='mySocialLinks'>
        {
          state.length ? (
            <ReactSortable
              handle='.icon-drag'
              ghostClass='drag-ghost'
              chosenClass='drag-chosen'
              animation={200}
              list={state}
              setList={setState}
              className={style['social-links-wrapper']}
              onUpdate={(evt) => {
                onSortUpdate?.(evt.newIndex, evt.oldIndex);
              }}
            >
              {
                state.map((item, index) => (
                  <SocialLinkItem
                    key={item.id}
                    {...item}
                    index={index}
                    allowSort={state.length > 1}
                    // onDraftChange={(value) => {
                    //   onDraftChange?.(value, index)
                    // }}
                  />
                ))
              }
            </ReactSortable>
          ) : <p className={style['empty-tips']}>还没有添加社交平台链接，快去试一试吧~</p>
        }
      </main>

      {/* TODO */}
      {/* <div className={style['icon-position']}>
        <p className='main-title'>图标位置</p>
        <p className='secondary-title'>自定义社交平台图标的位置</p>

        <RadioGroup
          className={style['icon-position-options']}
          value={socialLinkPosition}
          onValueChange={(value) => {
            setSocialLinkPosition(value as SocialLinksPosition);
            onPositionChange?.(value as SocialLinksPosition);
          }}
        >
          <Radio value={SocialLinksPosition.TOP}>上方</Radio>
          <Radio value={SocialLinksPosition.BOTTOM}>下方</Radio>
        </RadioGroup>
      </div> */}

      <div className={style['btn-action']}>
        <Button
          fullWidth
          radius='full'
          className='btn-main-color'
          onPress={() => { event.emit(EVENTS.SHOW_MODAL_ADD_SOCIAL_LINK) }}
        >
          <i className={cls('iconfont-my', 'icon-my-plus', 'text-[12px]')}></i>
          <span>添加社交平台链接</span>
        </Button>
      </div>
    </div>
  )
};
