import * as types from './mutation-types';

const mutations = {
  [types.ADD_KEEP_ALIVE_COMPONENT] (state, componentName) {
    if (!state.keepAliveComponents.includes(componentName)) {
      state.keepAliveComponents.push(componentName);
    }
  },
  [types.DELETE_KEEP_ALIVE_COMPONENT] (state, componentName) {
    if (!state.keepAliveComponents.includes(componentName)) {
      const position = state.keepAliveComponents.findIndex((c) => c === componentName);
      state.keepAliveComponents.splice(position, 1);
    }
  },
  [types.TOGGLE_LOADING] (state, isLoading) {
    if (isLoading) {
      state.loadingCount++;
    } else {
      state.loadingCount--;
    }
  }
};

export default mutations;
