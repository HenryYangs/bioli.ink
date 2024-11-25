// import { SocialLinksPosition } from '@/app/my/redux/my';
import { SocialLink } from '@/app/types/my';

export interface SocialLinksPanelProps {
  list: SocialLink[];
  // position: SocialLinksPosition;
  onSortUpdate?: (newIndex?: number, oldIndex?: number) => void;
  // onPositionChange?: (value?: SocialLinksPosition) => void;
  // onDraftChange?: (value?: boolean, index?: number) => void;
}
