const Mock = require('mockjs');
const Random = Mock.Random;
const data = () => Mock.mock({
  code: 0,
  data: {
    total: Random.natural(1, 10000),
    currentPage: 1,
    pageSize: 10,
    'list|20': [{
      id: () => Random.id(),
      title: () => Random.ctitle(1, 30),
      createDate: () => Random.date('T'),
      commentCount: () => Random.natural(),
      articleShortDesc: () => Random.cparagraph()
    }]
  }
});

module.exports = data;
