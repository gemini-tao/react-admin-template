const model = {
  name: 'user',
  state: {
    role: 'user', // 角色
    lastTime: 0, // 上次登陆时间
  },
  reducers: {
    /**
     * 登陆成功后设置用户信息
     */
    setUserDetail(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  selectors: {
    /**
     * 是否到期
     * @desc 租期为1个小时，这里保险起见超过55分钟就认为过期
     */
    isExpired() {
      const now = new Date().getTime();
      return rootState => (now - rootState.user.lastTime) >= 3300000;
    },
  },
};

export default model;
