const Mock = require('mockjs');
const Random = Mock.Random;
const data = () => Mock.mock({
  code: 0,
  data: {
    'list|1-30': [{
      id: () => Random.id(),
      archiveTitle: () => Random.title(),
      year: () => Random.date('T'),
      'list|1-20': [
        {
          id: () => Random.id(),
          title: () => Random.title(),
          createDate: () => Random.date('T')
        }
      ]
    }]
  }
});

module.exports = data;
