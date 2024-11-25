import { SocialLink } from '@/app/types/my';
import { UserModule } from '@/app/types/my/module';

export interface PageViewProps {
  avatar: string;
  username: string;
  bio: string;
  socialLinks: SocialLink[];
  userModules: UserModule[];

  className?: string;
}
