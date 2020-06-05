const Mock = require('mockjs');
const Random = Mock.Random;
const data = () => Mock.mock({
  code: 0,
  data: {
    count: () => Random.natural(),
    'list|2-100': [
      {
        id: () => Random.id(),
        usename: () => Random.cname(),
        commentDate: () => Random.date('T'),
        content: () => Random.cparagraph(),
        'children|1-10': [
          {
            id: () => Random.id(),
            userSite: () => Random.url(),
            username: () => Random.cname(),
            commentDate: () => Random.date('T'),
            content: () => Random.cparagraph()
          }
        ]
      }
    ]
  }
});

module.exports = data;
