export const downloadFile = async (url: string, name: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
};
export const downloadFileImage = async (url: string, name: string) => {
  const img = document.createElement('img');
  img.crossOrigin = 'anonymous';
  img.src = url;
  img.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    downloadFile(canvas.toDataURL(), name);
  };
};
export const downloadFileJson = async (data: any, name: string) => {
  let dataStr = JSON.stringify(data ?? null);
  let dataUri =
    'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
  let exportFileDefaultName = `${name}.json`;

  downloadFile(dataUri, exportFileDefaultName);
};
