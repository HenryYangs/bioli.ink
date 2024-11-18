import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Button } from '@nextui-org/button';
import { Slider } from '@nextui-org/slider';
import { Switch } from '@nextui-org/switch';

import SettingItem from './setting-item';
import style from './style-settings.module.scss';

export default function StyleSettings() {
  return (
    <Accordion variant='bordered' className='bg-white'>
      <AccordionItem
        title='样式配置'
        classNames={{
          title: style.title,
          content: style.wrapper
        }}
      >
        <Button size='sm' color='warning' variant='ghost'>全部收起</Button>

        <Accordion
          isCompact
          variant='shadow'
          selectionMode='multiple'
          itemClasses={{
            title: style.title,
            content: style['item-wrapper']
          }}
        >
          <AccordionItem title='基础配置'>
            <SettingItem title='文案颜色' content={<></>} />
            <SettingItem title='背景颜色' content={<></>} />
            <SettingItem title='阴影类型' content={<Switch />} />
          </AccordionItem>

          <AccordionItem title='个人信息'>
            <SettingItem title='头像阴影' content={<Slider size='sm' />} />
            <SettingItem title='头像边框宽度' content={<Slider size='sm' />} />
            <SettingItem title='头像边框颜色' content={<></>} />
            <SettingItem title='折叠个人简介内容' content={<Switch />} />
            <SettingItem title='社交平台图标尺寸' content={<Slider size='sm' />} />
          </AccordionItem>

          <AccordionItem title='卡片模块'>
            <SettingItem title='卡片颜色' content={<></>} />
            <SettingItem title='卡片文案颜色' content={<></>} />
            <SettingItem title='卡片圆角' content={<Slider size='sm' />} />
            <SettingItem title='卡片边框宽度' content={<Slider size='sm' />} />
            <SettingItem title='卡片边框颜色' content={<></>} />
            <SettingItem title='卡片阴影' content={<Slider size='sm' />} />
          </AccordionItem>

          <AccordionItem title='字体'>
            <SettingItem title='标题类字体' content={<></>} />
            <SettingItem title='文本类字体' content={<></>} />
          </AccordionItem>

          {/* TODO */}
          {/* <AccordionItem title='其它'></AccordionItem> */}
        </Accordion>
      </AccordionItem>
    </Accordion>
  )
}
