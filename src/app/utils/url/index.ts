/**
 * 解析 url 的 search 部分
 */
export const parseSearch = (rawSearch?: string) => {
  if (!rawSearch) {
    rawSearch = window.location.search;
  }

  const search = rawSearch.replace(/^\?/, '');
  const searchArr = search.split('&');
  const result: Record<string, string> = {};

  searchArr.forEach(item => {
    const [key, value] = item.split('=');

    result[key] = value;
  });

  return result;
};

/**
 * 给链接最后加时间戳，保证没有缓存
 * TODO 不应该直接接?，需要判断传入的 url 里的内容
 */
export const addTsAfterUrl = (url: string = '') => {
  if (!url) return '';

  return `${url}?t=${Date.now()}`;
};
