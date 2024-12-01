import { GetUploadTokenReq } from '@/app/types/api/auth';

export interface UseUploadBase64Props {
  onSuccess: (url: string) => void;
}

export interface RunUploadBase64Props extends GetUploadTokenReq {
  base64: string;
}
