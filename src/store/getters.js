const getters = {
  isLoading (state) {
    return state.loadingCount > 0;
  }
};

export default getters;
