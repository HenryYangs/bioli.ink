import { EVENTS } from '@/app/constant/events';

import event from '../event';
import { parseJSON } from '../transform';

export const uploadBase64 = ({ base64, token }: { base64: string; token: string }): Promise<{
  key: string;
  hash: string;
}> => {
  return new Promise((resolve, reject) => {
    const pic = base64.replace('data:image/jpeg;base64,', '');
    const url = 'http://up-as0.qiniup.com/putb64/-1';
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange=function(){
      if (xhr.readyState==4){
        const result = parseJSON(xhr.responseText);

        if (result.error) {
          event.emit(EVENTS.SHOW_ALERT, {
            text: result.error,
            color: 'danger',
          });
          reject(result.error);
        } else {
          resolve(parseJSON(xhr.responseText));
        }
      }
    }
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.setRequestHeader('Authorization', `UpToken ${token}`);
    xhr.send(pic);
  })
};
