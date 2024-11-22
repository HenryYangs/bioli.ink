import { SocialLink } from '@/app/types/my';

export interface SocialLinksProps {
  links: SocialLink[];

  mode?: 'edit' | 'view';
  align?: 'center' | 'left' | 'right';
  className?: string;
  onClick?: ({ link, index }?: { link?: SocialLink; index?: number }) => void;
}
