import { SocialLink } from '@/app/types/my';

export interface SocialLinksProps {
  links: SocialLink[];

  mode?: 'edit' | 'view';
  align?: 'center' | 'left' | 'right';
  className?: string;
  onClick?: (link?: SocialLink) => void;
}
