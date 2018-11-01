/*
 * @Author: lifan
 * @Date: 2018-11-01 19:27:10
 * @Last Modified by:   lifan
 * @Last Modified time: 2018-11-01 19:27:10
 */
import CheckPermissions from './CheckPermissions';

const Authorized = ({
  children, role, authority, noMatch = null,
}) => {
  const childrenRender = typeof children === 'undefined' ? null : children;
  return CheckPermissions(authority, role, childrenRender, noMatch);
};

export default Authorized;
