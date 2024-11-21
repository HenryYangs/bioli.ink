import { SocialLink } from '@/app/types/my';

export interface PageViewProps {
  avatar: string;
  username: string;
  bio: string;
  socialLinks: SocialLink[];

  className?: string;
}
