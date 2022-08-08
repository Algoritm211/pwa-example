const { faker } = require('@faker-js/faker');
const path = require('path');
const fs = require('fs');

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


const photos = fs.readdirSync(path.join(__dirname, 'photos'))
  .map(data => path.join(__dirname,`${data}`))
  .map(data => ({url: data}))

module.exports = {posts, photos}

