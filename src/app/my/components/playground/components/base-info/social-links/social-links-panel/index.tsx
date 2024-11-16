import { Radio, RadioGroup } from "@nextui-org/radio";
import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import SocialLinkItem from '../social-link-item';
import style from './social-links-panel.module.scss';

export default function SocialLinksPanel() {
  const [list, setList] = useState([]);

  return (
    <div>
      <p className='modal-inner-title'>通过配置社交平台链接，告诉大家在哪可以找到你~</p>

      <main className={style['my-links']} id='mySocialLinks'>
        <ReactSortable
          handle='.icon-drag'
          ghostClass={style['drag-ghost']}
          chosenClass={style['drag-chosen']}
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
      </main>

      <div className={style['icon-position']}>
        <p className='modal-inner-title'>图标位置</p>
        <p className='modal-secondary-title'>自定义社交平台图标的位置</p>

        <RadioGroup className={style['icon-position-options']}>
          <Radio value='top'>上方</Radio>
          <Radio value='bottom'>下方</Radio>
        </RadioGroup>
      </div>
    </div>
  )
};
