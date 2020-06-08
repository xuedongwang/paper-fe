import * as types from './mutation-types';
const mutations = {
  [types.ADD_KEEP_ALIVE_COMPONENT] (state, componentName) {
    if (!state.keepAliveComponents.includes(componentName)) {
      state.keepAliveComponents.push(componentName);
    }
  },
  [types.DELETE_KEEP_ALIVE_COMPONENT] (state, componentName) {
    if (!state.keepAliveComponents.includes(componentName)) {
      state.keepAliveComponents.splice(state.keepAliveComponents.findIndex(c => c === componentName), 1);
    }
  },
  [types.TOGGLE_LOADING] (state, isShowLoading) {
    state.isLoading = isShowLoading;
  }
};

export default mutations;