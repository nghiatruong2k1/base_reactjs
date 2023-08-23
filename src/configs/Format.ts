export const formatNumber = (num?: number, decimals: number = 1) => {
  if (num) {
    if (num > 0) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(decimals) + ' B';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(decimals) + ' M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(decimals) + ' K';
      }
      return num.toString();
    } else {
      return '-' + formatNumber(num * -1);
    }
  } else {
    return '0';
  }
};
export const formatAlias = (str?: string) => {
  let newStr = str
    .toLowerCase()
    .replaceAll(/\s{1,}/g, '-')
    .replaceAll(/[àáảãạâấầẩẫậăắằẳẵặ]/g, 'a')
    .replaceAll(/[èéẻẽẹêếềểễệ]/g, 'e')
    .replaceAll(/[íìỉĩị]/g, 'i')
    .replaceAll(/[óòỏõọôốồổỗộơớờởỡợ]/g, 'o')
    .replaceAll(/[úùủũụưứừửữự]/g, 'u')
    .replaceAll(/[ýỳỷỹỵ]/g, 'y')
    .replaceAll(/[đ]/g, 'd');
  return newStr;
};
export const formatBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (error) => reject(error);
  });
};
export const formatByte = (num: number = 0) => {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0;
  let n = num || 0;
  while (n >= 1024 && ++l) {
    n = n / 1024;
  }
  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
};
