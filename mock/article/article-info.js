const Mock = require('mockjs');
const Random = Mock.Random;
const fs = require('fs');
const path = require('path');

const data = () => Mock.mock({
  code: 0,
  data: {
    'isOriginal|1': [false, true],
    originalUrl: () => Random.url(),
    title: () => Random.ctitle(),
    createDate: () => Random.date('T'),
    lastModified: () => Random.date('T'),
    author: () => Random.name(),
    'moreRead|2': [
      {
        id: () => Random.id(),
        createDate: () => Random.date('T'),
        name: () => Random.cword(1, 10)
      }
    ],
    content: () => fs.readFileSync(path.join(__dirname, './test-article-markdown.md')).toString(),
    'tags|1-10': [
      {
        id: () => Random.id(),
        name: () => Random.cword(1, 10)
      }
    ]
  }
});

module.exports = data;
