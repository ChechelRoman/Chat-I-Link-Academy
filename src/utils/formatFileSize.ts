export const formatFileSize = (size: number | undefined) => {
  if (size) {
    let result;

    if (size > 1048576) {
      result = `${(size / 1048576).toFixed(1)} MB`;
    } else {
      result = `${(size / 1024).toFixed(1)} KB`;
    }

    return result;
  }

  return;
};
