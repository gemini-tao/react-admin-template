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
};

export default model;
