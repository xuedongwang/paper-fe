const Mock = require('mockjs');
const Random = Mock.Random;
const data = () => Mock.mock({
  code: 0,
  data: {
    'list|1-30': [{
      id: () => Random.id(),
      name: () => Random.cword(1, 8)
    }]
  }
});

module.exports = data;
