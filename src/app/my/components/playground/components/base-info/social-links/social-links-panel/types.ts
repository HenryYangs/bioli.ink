import { SocialLink } from '@/app/types/my';

export interface SocialLinksPanelProps {
  list: SocialLink[];
  setList?: ((newState: SocialLink[]) => void);
}
