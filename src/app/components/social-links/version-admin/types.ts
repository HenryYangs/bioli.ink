import { SocialLink } from '@/app/types/my';

export interface onClickProps {
  item?: SocialLink;
  index?: number;
}

export interface SocialLinksProps {
  links: SocialLink[];

  className?: string;
  onClick?: (props?: onClickProps) => void;
}
