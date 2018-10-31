/*
 * @Author: lifan
 * @Date: 2018-10-30 15:25:37
 * @Last Modified by: lifan
 * @Last Modified time: 2018-10-31 16:39:07
 */
import { push } from 'connected-react-router';

const model = {
  name: 'count',
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state) {
      return state + 1;
    },
  },

  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.count.increment();
    },

    goTo() {
      dispatch(push('/test'));
    },
  }),

  selectors: {
    sum() {
      return rootState => rootState.count;
    },
  },
};

export default model;
