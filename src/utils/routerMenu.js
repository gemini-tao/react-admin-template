/*
 * @Author: lifan
 * @Date: 2018-11-16 10:42:52
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-16 10:49:38
 * @desc: 路由和菜单相关工具函数
 */
import pathToRegexp from 'path-to-regexp';
/**
 * 递归扁平化所有路由路径
 * @param {array} menuData 路由表
 */
const getFlatMenuKeys = (menuData) => {
  let keys = [];
  menuData.forEach((item) => {
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
    keys.push(item.path);
  });
  return keys;
};

/**
 * @desc 把/gis/test/aa/ 拆分成 ["/gis", "/gis/test", "/gis/test/aa"]
 * @param {string} url 路径
 */
const urlToList = (url) => {
  const list = url.split('/').filter(item => item);
  return list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`);
};


const getMenuMatches = (floatMenuKeys, path) => (
  floatMenuKeys.filter((item) => {
    if (item) {
      return pathToRegexp(item).test(path);
    }

    return false;
  })
);

export { getFlatMenuKeys, urlToList, getMenuMatches };
