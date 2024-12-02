import { SocialLink } from '@/app/types/my';

export interface onClickProps {
  item?: SocialLink;
  index?: number;
}

export interface SocialLinksProps {
  links: SocialLink[];

  mode?: 'edit' | 'view';
  align?: 'center' | 'left' | 'right';
  className?: string;
  onClick?: (props?: onClickProps) => void;
}
