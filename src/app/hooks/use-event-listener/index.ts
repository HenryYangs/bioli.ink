import { useEffect } from 'react';

import { EVENTS } from '@/app/constant/events';
import event from '@/app/utils/event';

/**
 * 支持同时注册多个事件，减少 useEffect 的数量
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function useEventListener(eventName: EVENTS | Partial<Record<EVENTS, Function>>, callback?: Function) {
  useEffect(() => {
    const events = typeof eventName === 'string' ? { [eventName]: callback || function() {} } : eventName;
    const entries = Object.entries(events);

    entries.forEach(([ev, cb]) => {
      event.on(ev, cb);
    });

    return () => {
      entries.forEach(([ev, cb]) => {
        event.off(ev, cb);
      });
    };
  }, []);
};
