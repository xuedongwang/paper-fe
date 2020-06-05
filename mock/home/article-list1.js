const Mock = require('mockjs');
const Random = Mock.Random;
const data = () => Mock.mock({
  code: 0,
  data: {
    total: () => Random.natural(1, 1000),
    pageSize: () => Random.natural(1, 1000),
    currentPage: () => Random.natural(1, 1000),
    'list|10': [{
      id: () => Random.id(),
      title: () => Random.ctitle(1, 30),
      createdAt: () => Random.date('T'),
      commentCount: () => Random.natural(),
      description: () => Random.cparagraph()
    }]
  }
});

module.exports = data;
