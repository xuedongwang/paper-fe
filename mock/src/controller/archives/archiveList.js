const Mock = require('mockjs');
const Random = Mock.Random;

const genrateYeartimeStamp = yearRange => {
  const index = parseInt(Math.random() * yearRange.length);
  return new Date(yearRange[index]).getTime();
}

const data = () => Mock.mock({
  code: 0,
  data: {
    'list|50': [{
      id: () => Random.id(),
      title: () => Random.title(),
      createDate: () => genrateYeartimeStamp(['2017', '2018', '2019', '2020', '2016'])
    }],
    total: () => Random.natural(),
    currentPage: () => Random.natural(1, 100),
    pageSize: () => Random.natural(1, 100)
  }
});

module.exports = data;
