import { format } from 'timeago.js';
import dayjs from 'dayjs';
import accounting from 'accounting';

const filtersFunc = {
  timeago (time, locale = 'zh_CN') {
    return format(time, locale);
  },
  dayjs (time, rule = 'YYYY-MM-DD HH:hh:ss') {
    return dayjs(time).format(rule);
  },
  formatNumber (number) {
    return accounting.formatNumber(number);
  },
  formatString (str, defaultValue = '-') {
    return str || defaultValue;
  }
};

export const filters = {
  install (Vue) {
    for (const [key, value] of Object.entries(filtersFunc)) {
      Vue.filter(key, value);
    }
  }
};
