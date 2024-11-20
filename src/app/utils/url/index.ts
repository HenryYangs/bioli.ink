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
