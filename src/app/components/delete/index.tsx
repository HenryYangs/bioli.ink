import { Badge } from '@nextui-org/badge';

import Content from './content';
import { DeleteProps } from './types';

export default function Delete({
  title,
  onConfirm,
  children,
}: DeleteProps) {
  return (
    <Badge
      isOneChar
      content={
        <Content title={title} onConfirm={onConfirm} />
      }
      color='danger'
      shape='circle'
    >
      {children}
    </Badge>
  )
}
