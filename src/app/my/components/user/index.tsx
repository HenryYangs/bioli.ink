import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import {Popover, PopoverContent,PopoverTrigger} from '@nextui-org/popover';

import { useUserBaseInfo } from '@/app/hooks/api/use-user-base-info';
import { cls } from '@/app/utils/string';
import { addTsAfterUrl } from '@/app/utils/url';

import More from './components/more';
import style from './user.module.scss';

export default function UserEntry() {
  const { data } = useUserBaseInfo();

  return (
    <Popover placement='top-start' crossOffset={30}>
      <PopoverTrigger>
        <Button
          radius='full'
          className={cls(style.trigger, 'hover-bg')}
        >
          <Avatar src={addTsAfterUrl(data?.avatar)} />

          <span className={style.username}>@{data?.name || data?.username}</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className={style.content}>
          <div className={style.user}>
            <Avatar src={data?.avatar} />

            <div>
              <p className={style['info-name']}>@{data?.name || data?.username}</p>
              <p className={style['info-link']}>bioli.ink/{data?.username}</p>
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
