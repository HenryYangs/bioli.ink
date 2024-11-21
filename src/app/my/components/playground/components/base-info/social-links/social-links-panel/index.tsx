import { ReactSortable } from '@miestasmia/react-sortablejs';
import { Button } from '@nextui-org/button';
import { Radio, RadioGroup } from "@nextui-org/radio";

import { EVENTS } from '@/app/constant/events';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import SocialLinkItem from '../social-link-item';
import style from './social-links-panel.module.scss';
import { SocialLinksPanelProps } from './types';

export default function SocialLinksPanel({ list, setList }: SocialLinksPanelProps) {
  return (
    <div className={style.wrapper}>
      <p className='main-title'>通过配置社交平台链接，告诉大家在哪可以找到你~</p>

      <main id='mySocialLinks'>
        {
          list.length ? (
            <ReactSortable
              handle='.icon-drag'
              ghostClass='drag-ghost'
              chosenClass='drag-chosen'
              animation={200}
              list={list}
              setList={setList}
              className={style['social-links-wrapper']}
            >
              {
                list.map(item => (
                  <SocialLinkItem
                    key={item.id}
                    id={item.id}
                    icon={item.icon}
                    name={item.name}
                    isDraft={item.isDraft}
                  />
                ))
              }
            </ReactSortable>
          ) : <p className={style['empty-tips']}>还没有添加社交平台链接，快去试一试吧~</p>
        }
      </main>

      <div className={style['icon-position']}>
        <p className='main-title'>图标位置</p>
        <p className='secondary-title'>自定义社交平台图标的位置</p>

        <RadioGroup className={style['icon-position-options']}>
          <Radio value='top'>上方</Radio>
          <Radio value='bottom'>下方</Radio>
        </RadioGroup>
      </div>

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
