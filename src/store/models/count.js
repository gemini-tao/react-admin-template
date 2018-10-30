/*
 * @Author: lifan
 * @Date: 2018-10-30 15:25:37
 * @Last Modified by: lifan
 * @Last Modified time: 2018-10-30 16:07:04
 */
const count = {
  state: 0, // initial state

  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return state + payload;
    },
  },

  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
};

export default count;
