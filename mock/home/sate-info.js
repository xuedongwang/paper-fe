const Mock = require('mockjs');
const data = () => Mock.mock({
  code: 0,
  data: {
    author: 'XueDong Wang',
    authorSite: 'https://www.wangxuedong.com/',
    siteName: 'xxxx博客',
    recordNumber: '陕ICP备xxxxxxx号-2'
  }
});

module.exports = data;
