import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import {Popover, PopoverContent,PopoverTrigger} from '@nextui-org/popover';

import { cls } from '@/app/utils/string';

import More from './components/more';
import style from './user.module.scss';

export default function UserEntry() {
  return (
    <Popover placement='top-start' crossOffset={30}>
      <PopoverTrigger>
        <Button
          radius='full'
          className={cls(style.trigger, 'hover-bg')}
        >
          <Avatar
            src='https://ugc.production.linktr.ee/4549a59d-738e-469a-8548-e08adf2358f1_u-4064972523-1513109925-fm-26-gp-0.jpeg?io=true&size=avatar'
          />

          <span className={style.username}>@henryyang</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className={style.content}>
          <div className={style.user}>
            <Avatar
              src='https://ugc.production.linktr.ee/4549a59d-738e-469a-8548-e08adf2358f1_u-4064972523-1513109925-fm-26-gp-0.jpeg?io=true&size=avatar'
            />

            <div>
              <p className={style['info-name']}>@henryyang</p>
              <p className={style['info-link']}>bioli.ink/henryyang</p>
              {/* TODO 用户的付费等级 */}
              {/* <Button>Free</Button> */}
            </div>
          </div>

          <Button size='lg' radius='full' variant='ghost'>创建新账户</Button>

          <More />
        </div>
      </PopoverContent>
    </Popover>
  );
}
