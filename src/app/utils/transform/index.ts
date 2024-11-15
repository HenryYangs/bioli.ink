export const file2base64 = (file: File | Blob, callback: (result: FileReader['result']) => void) => {
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    callback(reader.result);
  });
  reader.readAsDataURL(file);
};
