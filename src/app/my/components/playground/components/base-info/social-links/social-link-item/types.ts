import { SocialLink } from '@/app/types/my';

export interface SocialLinkItemProps extends SocialLink {
  index: number;
  allowSort: boolean;
}
