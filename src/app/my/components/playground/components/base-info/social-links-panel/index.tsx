import { Radio, RadioGroup } from "@nextui-org/radio";
import { Switch } from '@nextui-org/switch';
import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import { cls } from '@/app/utils/string';

import style from './social-links-panel.module.scss';

export default function SocialLinksPanel() {
  const [list, setList] = useState([{ id: "1", name: "Facebook" }, { id: "2", name: "X" }, { id: "3", name: "Instagram" },{ id: "4", name: "Facebook" }, { id: "5", name: "X" }, { id: "6", name: "Instagram" },{ id: "7", name: "Facebook" }, { id: "8", name: "X" }, { id: "9", name: "Instagram" },{ id: "10", name: "Facebook" }, { id: "11", name: "X" }, { id: "12", name: "Instagram" },{ id: "13", name: "Facebook" }, { id: "14", name: "X" }, { id: "15", name: "Instagram" },{ id: "16", name: "Facebook" }, { id: "17", name: "X" }, { id: "18", name: "Instagram" }]);

  return (
    <div className=''>
      <h5>通过配置社交平台链接，告诉大家在哪可以找到你~</h5>

      <main className={style['my-links']} id='mySocialLinks'>
        <ReactSortable
          handle={`.${style['icon-drag']}`}
          ghostClass={style['drag-ghost']}
          chosenClass={style['drag-chosen']}
          animation={200}
          list={list}
          setList={setList}
          className={style['social-links-wrapper']}
        >
          {
            list.map(item => (
              <div key={item.id} className={style['social-link-item']}>
                <i className={cls('iconfont', 'icon-my-drag', style['icon-drag'])}></i>

                <div className={cls(style['social-link-content'], 'hover-bg')}>
                  <i className={cls('iconfont', `icon-social-link-${item.icon}`)}></i>
                  <span className={style['social-link-name']}>{item.name}</span>
                  <i className='iconfont icon-my-edit'></i>
                </div>

                <Switch defaultSelected color="success" />
              </div>
            ))
          }
        </ReactSortable>
      </main>

      <div className={style['icon-position']}>
        <h5>图标位置</h5>

        <RadioGroup>
          <Radio value='top'>上方</Radio>
          <Radio value='bottom'>下方</Radio>
        </RadioGroup>
      </div>
    </div>
  )
};
