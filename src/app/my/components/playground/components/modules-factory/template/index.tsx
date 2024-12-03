import { Card, CardBody } from '@nextui-org/card';
import { Switch } from '@nextui-org/switch';
import { useDispatch } from 'react-redux';

import DeleteContent from '@/app/components/delete/content';
import { updateUserModule } from '@/app/my/redux/my';
import { cls } from '@/app/utils/string';

import { TYPE_TITLE_MAP } from '../config';
import { TEMPLATE_TOOLS } from './config';
import style from './template.module.scss';
import { ModuleTemplateProps } from './types';

export default function ModuleTemplate({
  index,
  type,
  typeName,
  coreContent,
}: ModuleTemplateProps) {
  const dispatch = useDispatch();
  const onRemoveHandler = () => {
    dispatch(updateUserModule({ index, action: 'delete' }));
  };

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
              <i
                className={
                  cls(
                    'iconfont-my',
                    'icon-my-share',
                    style.tool,
                    style.disabled,
                  )
                }
                title='分享'
              ></i>

              <Switch
                defaultSelected
                size='sm'
                isDisabled
                className={cls(style['template-visible'])}
              />
            </div>

            <div className={style['action-row']}>
              <i
                className={
                  cls(
                    'iconfont-my',
                    'icon-my-add',
                    style.tool,
                    style.disabled,
                  )
                }
                title='新增'
              ></i>

              <DeleteContent triggerCls={style['action-delete']} onConfirm={onRemoveHandler} />
            </div>
          </div>
        </section>
      </CardBody>
    </Card>
  )
}
