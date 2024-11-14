import { SocialLinks } from '@/app/types/my';

export interface SocialLinksProps {
  links: SocialLinks[];

  mode?: 'edit' | 'view';
  className?: string;
}
