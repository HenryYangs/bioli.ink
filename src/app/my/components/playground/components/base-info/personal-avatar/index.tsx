import 'react-image-crop/dist/ReactCrop.css';

import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { useRef, useState } from 'react';
// https://github.com/sekoyo/react-image-crop?tab=readme-ov-file#props
import ReactCrop, {
  Crop,
  PixelCrop,
} from 'react-image-crop';

import DragAndDrop from '@/app/components/drag-drop';
import { EVENTS } from '@/app/constant/events';
import { useDebounceEffect } from '@/app/hooks/use-debounce-effect';
import { useEventListener } from '@/app/hooks/use-event-listener';
import { FileType } from '@/app/types/my';
import { cls } from '@/app/utils/string';
import { file2base64 } from '@/app/utils/transform';

import { BTN_CONFIRM_TEXT, DEFAULT_COMPLETED_CROP } from './config';
import style from './personal-avatar.module.scss';
import { AvatarStatus } from './types';
import { canvasPreview, centerAspectCrop, getRealCroppedImage } from './utils';

export default function PersonalAvatar() {
  const [status, setStatus] = useState<AvatarStatus>(AvatarStatus.SELECT);
  const [avatar, setAvatar] = useState('');
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>(DEFAULT_COMPLETED_CROP);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const finalCroppedAvatar = useRef('');

  const onAvatarUpdate = (files: File[]) => {
    if (!files || files.length <= 0) {
      return;
    }

    setCrop(undefined) // Makes crop preview update between images.
    file2base64(files[0], (result) => {
      setAvatar(result?.toString() || '');
      setStatus(AvatarStatus.CROP);
    });
  };

  useEventListener(EVENTS.AVATAR_UPDATE, onAvatarUpdate);

  // 图片加载成功之后设置裁剪参数
  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;

    setCrop(centerAspectCrop(width, height, 1));
  }

  const onReSelect = () => {
    setAvatar('');
    setCrop(undefined);
    setCompletedCrop(DEFAULT_COMPLETED_CROP);
    finalCroppedAvatar.current = '';
    setStatus(AvatarStatus.SELECT);
  };

  const onUploadPress = async () => {
    if (status === AvatarStatus.UPLOAD) {
      // TODO 上传七牛云
      console.log('finalCroppedAvatar', finalCroppedAvatar.current);
    } else if (status === AvatarStatus.CROP) {
      getRealCroppedImage({
        image: imgRef.current,
        previewCanvas: previewCanvasRef.current,
        completedCrop,
        callback: (base64) => {
          finalCroppedAvatar.current = base64;
          setStatus(AvatarStatus.UPLOAD);
        },
      });
    }
  };

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
        )
      }
    },
    100,
    [completedCrop],
  );

  // 重置裁剪框
  const onReset = () => {
    if (!imgRef.current) return;

    setCrop(centerAspectCrop(imgRef.current.width, imgRef.current.height, 1));
  };

  return (
    <>
      {avatar ? (
        <>
          <Button
            size='md'
            startContent={<i className='iconfont icon-my-reset'></i>}
            color='warning'
            variant='ghost'
            className='w-[36px]'
            onPress={onReset}
          >重置</Button>

          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            minWidth={10}
            maxWidth={300}
            minHeight={10}
            maxHeight={300}
            disabled={status === AvatarStatus.UPLOAD}
          >
            <Image
              ref={imgRef}
              alt='Crop me'
              src={avatar}
              width={400}
              height={300}
              onLoad={onImageLoad}
            />
          </ReactCrop>

          {
            completedCrop ? (
              <canvas
                ref={previewCanvasRef}
                className='hidden'
                style={{
                  width: completedCrop.width,
                  height: completedCrop.height,
                }}
              ></canvas>
            ) : null
          }

          <div className={style['btn-wrapper']}>
            <Button
              radius='full'
              className={cls(style['btn-cancel'], 'btn-main-color-other')}
              onPress={onReSelect}
            >重新选择</Button>

            <Button
              radius='full'
              className='btn-main-color'
              onPress={onUploadPress}
            >{BTN_CONFIRM_TEXT[status]}</Button>
          </div>
        </>
      ) : <DragAndDrop type={FileType.IMAGE} accept='image/*' />}
    </>
  );
};
