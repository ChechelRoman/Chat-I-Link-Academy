const fileExtensions = [
  'video/mp4',
  'video/ogg',
  'video/webm',
  'audio/mpeg',
  'audio/ogg',
  'image/jpeg',
  'image/jpg',
  'image/gif, image/png',
  'image/svg+xml',
];

export const validateFile = (type: string, size: number) => {
  if (!fileExtensions.includes(type)) {
    alert(
      'This file extension is not supported!\nSupported extensions are: mp4, ogg, webm, mpeg, jpeg, jpg, gif, png, svg+xml.'
    );
    return false;
  }

  if (size / 1048576 >= 2) {
    alert('This file exceeds size limit! Try file that weighs less than 2 mb.');
    return false;
  }

  return true;
};
