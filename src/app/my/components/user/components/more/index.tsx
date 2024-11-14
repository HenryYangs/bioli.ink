import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';

import { cls } from '@/app/utils/string';

import { HelpEntry } from '../../types';
import { HELP_LIST } from './config';

export default function More() {
  const onHelpItemPress = (item: HelpEntry) => {
    if (item.redirect) {
      window.location.href = item.redirect;
    } else if (item.action) {
      item.action();
    }
  };

  return (
    <div>
      <Listbox
        variant='flat'
        aria-label='User Extra Entries'
      >
        {
          HELP_LIST.map(section => (
            <ListboxSection key={section.title} title={section.title} showDivider>
              {
                section.entries.map(item => (
                  <ListboxItem
                    key={item.key}
                    isDisabled={item.disabled === true}
                    onPress={() => onHelpItemPress(item)}
                    startContent={<i className={cls('iconfont', `icon-my-${item.icon}`)}></i>}
                  >{item.name}</ListboxItem>
                ))
              }
            </ListboxSection>
          ))
        }
      </Listbox>
    </div>
  );
}
