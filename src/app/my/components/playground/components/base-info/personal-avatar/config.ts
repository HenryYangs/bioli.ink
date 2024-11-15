import { PixelCrop } from 'react-image-crop';

import { AvatarStatus } from './types';

export const DEFAULT_COMPLETED_CROP: PixelCrop = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  unit: 'px',
};

export const BTN_CONFIRM_TEXT: Record<AvatarStatus, string> = {
  [AvatarStatus.SELECT]: '',
  [AvatarStatus.CROP]: '裁剪',
  [AvatarStatus.UPLOAD]: '上传',
};
