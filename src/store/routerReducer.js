/*
 * @Author: lifan
 * @Date: 2018-10-30 20:17:27
 * @Last Modified by:   lifan
 * @Last Modified time: 2018-10-30 20:17:27
 */
const merge = (state, payload) => ({ ...state, ...payload });

export default (history) => {
  const initialState = {
    location: history.location,
    action: history.action,
  };

  return (state = initialState, { type, payload } = {}) => {
    if (type === '@@router/LOCATION_CHANGE') {
      return merge(state, payload);
    }
    return state;
  };
};
