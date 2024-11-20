import { SocialLink, SocialPlatform } from '@/app/types/my';

export interface SocialLinksProps {
  links: SocialPlatform[];

  mode?: 'edit' | 'view';
  align?: 'center' | 'left' | 'right';
  className?: string;
  onClick?: (link?: SocialLink) => void;
}
