import { SocialLinkItem, SocialPlatform } from '@/app/types/my';

export interface SocialLinksProps {
  links: SocialPlatform[];

  mode?: 'edit' | 'view';
  className?: string;
  onClick?: (link?: SocialLinkItem) => void;
}
