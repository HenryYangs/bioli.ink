import { Sortable, Store } from 'react-sortablejs';

import { SocialLink } from '@/app/types/my';

export interface SocialLinksPanelProps {
  list: SocialLink[];
  setList?: ((newState: SocialLink[], sortable: Sortable | null, store: Store) => void);
}
