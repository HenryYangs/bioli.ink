export const file2base64 = (file: File | Blob, callback: (result: FileReader['result']) => void) => {
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    callback(reader.result);
  });
  reader.readAsDataURL(file);
};

/**
 * 二次封装 JSON.parse
 * 给报错时兜底
 */
export const parseJSON = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch {
    return typeof jsonString === 'object' ? jsonString : {};
  }
};

/**
 * 对象转query string
 */
export const queryStringify = (obj: Record<string, unknown>) => {
  const arr: string[] = [];

  Object.keys(obj).forEach((key) => {
    arr.push(`${key}=${obj[key]}`);
  });

  return arr.join('&');
};
