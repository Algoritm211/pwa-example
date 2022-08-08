const { faker } = require('@faker-js/faker');

const posts = [
  {
    id: faker.datatype.uuid(),
    title: 'Post 1',
    body: 'Some body of post 1',
    userId: faker.datatype.uuid()
  },
  {
    id: faker.datatype.uuid(),
    title: 'Post 2',
    body: 'Some body of post 2',
    userId: faker.datatype.uuid()
  }
]

module.exports = {posts}
