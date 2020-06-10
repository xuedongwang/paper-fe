
const directivesFunc = {
  lock: {
    update (el, { value }) {
      if (!value) {
        el.style.overflow = 'auto';
        el.style.height = 'auto';
      } else {
        el.style.overflow = 'hidden';
        el.style.height = '100vh';
      }
    }
  }
};

export const directives = {
  install (Vue) {
    for (const [key, value] of Object.entries(directivesFunc)) {
      Vue.directive(key, value);
    }
  }
};
