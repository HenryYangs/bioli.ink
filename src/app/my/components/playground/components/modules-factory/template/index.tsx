import { Card, CardBody } from '@nextui-org/card';
import { Switch } from '@nextui-org/switch';

import { cls } from '@/app/utils/string';

import { TYPE_TITLE_MAP } from '../config';
import { TEMPLATE_TOOLS } from './config';
import style from './template.module.scss';
import { ModuleTemplateProps } from './types';

export default function ModuleTemplate({
  type,
  typeName,
  coreContent,
}: ModuleTemplateProps) {
  return (
    <Card>
      <CardBody className={style.main}>
        <div className={cls(style['drag-area'], 'template-drag-icon')}>
          <i className='iconfont-my icon-my-drag'></i>
        </div>

        <section className={style['settings-wrapper']}>
          <div className={style['core-wrapper']}>
            <div className={style['template-type']}>
              <i className={cls('iconfont-my', `icon-my-${type}`)}></i>
              <span className={style['type-name']}>{typeName || TYPE_TITLE_MAP[type]}</span>
            </div>

            {coreContent}

            <div className={style['tools-wrapper']}>
              {
                TEMPLATE_TOOLS.map(tool => (
                  <div
                    key={tool.id}
                    className={cls(style.tool, tool.disabled ? style.disabled : '')}
                    title={tool.label}
                    onClick={tool.onClick}
                  >
                    <i className={cls('iconfont-my', `icon-my-${tool.icon}`)}></i>
                  </div>
                ))
              }
            </div>
          </div>

          <div className={style['action-wrapper']}>
            <div className={style['action-row']}>
              <i className={cls('iconfont-my', 'icon-my-share', style['icon-action'])} title='分享'></i>

              <Switch defaultSelected size='sm' className={style['template-visible']} />
            </div>

            <div className={style['action-row']}>
              <i className={cls('iconfont-my', 'icon-my-add', style['icon-action'])} title='新增'></i>

              <i className={cls('iconfont-my', 'icon-my-delete', style['icon-action'], 'ml-[12px]')} title='删除'></i>
            </div>
          </div>
        </section>
      </CardBody>
    </Card>
  )
}
