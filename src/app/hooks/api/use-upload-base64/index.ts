import { useState } from 'react';

import { uploadBase64 } from '@/app/utils/qiniu';

import { useUploadToken } from '../use-upload-token';
import { RunUploadBase64Props, UseUploadBase64Props } from './types';

export const useUploadBase64 = ({
  onSuccess
}: UseUploadBase64Props) => {
  const [loading, setLoading] = useState(false);
  const { runAsync: runUploadToken } = useUploadToken();

  const run = ({ type, base64 }: RunUploadBase64Props) => {
    setLoading(true);
    runUploadToken({ type })
      .then(async ({ token }) => {
        const result = await uploadBase64({
          base64,
          token,
        });

        onSuccess(`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${result.key}`);
        setLoading(false);
      });
  };

  return { run, loading };
};
