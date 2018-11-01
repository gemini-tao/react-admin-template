/*
 * @Author: lifan
 * @Date: 2018-11-01 17:50:53
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-01 17:52:25
 */
/**
 * 通用权限检查方法
 * Common check permissions method
 * @param { 权限判定 Permission judgment type string |array } authority
 * @param { 你的权限 Your permission description  type:string} currentAuthority
 * @param { 通过的组件 Passing components } target
 * @param { 未通过的组件 no pass components } Exception
 */
const checkPermissions = (authority, currentAuthority, target, Exception) => {
  // 没有输入authority默认查看所有
  if (!authority) {
    return target;
  }

  // 如果authority是字符串
  if (typeof authority === 'string') {
    if (authority === currentAuthority) {
      return target;
    }
    return Exception;
  }

  // 如果authority是数组
  if (Array.isArray(authority)) {
    if (authority.indexOf(currentAuthority) >= 0) {
      return target;
    }
    return Exception;
  }

  throw new Error('参数authority输入错误');
};

export default checkPermissions;
