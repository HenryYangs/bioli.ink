import { GetUploadTokenReq } from '@/app/types/api/auth';

export interface UseUploadBase64Props {
  onSuccess: (url: string) => void;
}

export interface RunUploadBase64Props extends Pick<GetUploadTokenReq, 'type'> {
  base64: string;
}
