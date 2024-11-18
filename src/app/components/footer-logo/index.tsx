import { cls } from '@/app/utils/string';

import style from './footer-logo.module.scss';
import { FooterLogoProps } from './types';

export default function FooterLogo(props: FooterLogoProps = {}) {
  const { className = '' } = props;

  return (
    <footer className={cls(style.wrapper, className)}>
      <span className={style['plain-text']}>MADE WITH</span>
      <span className={style.domain}>bioli.ink</span>
    </footer>
  )
}
