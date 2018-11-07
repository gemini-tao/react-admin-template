/*
 * @Author: lifan
 * @Date: 2018-11-07 11:14:18
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-07 11:15:48
 */
const model = {
  name: 'settings',
  state: {
    isMenuCollapsed: false,
  },
  reducers: {
    triggerMenuCollapsed(state) {
      return {
        ...state,
        isMenuCollapsed: !state.isMenuCollapsed,
      };
    },
  },
  effects: dispatch => ({
    async triggerMenuCollapsedAsync() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.settings.triggerMenuCollapsed();
    },
  }),
};

export default model;
