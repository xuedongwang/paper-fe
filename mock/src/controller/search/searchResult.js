const Mock = require('mockjs');
const Random = Mock.Random;
const data = () => Mock.mock({
  code: 0,
  data: {
    total: () => Random.natural(),
    keywords: () => Random.cword(),
    'list|1-30': [{
      id: () => Random.id(),
      title: () => Random.title(),
      createDate: () => Random.date('T')
    }]
  }
});

module.exports = data;
