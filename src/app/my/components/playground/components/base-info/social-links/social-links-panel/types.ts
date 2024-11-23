import { SocialLink } from '@/app/types/my';

export interface SocialLinksPanelProps {
  list: SocialLink[];
  onSortUpdate?: (newIndex?: number, oldIndex?: number) => void;
}
