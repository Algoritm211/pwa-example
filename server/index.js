const express = require('express') ;
const {posts} = require("./data");
const cors = require('cors')
const { faker } = require('@faker-js/faker');


const PORT = process.env.PORT || 5000

const app = express();
app.use(cors())
app.use(express.json());

app.get('/posts', (req, res) => {
  return res.status(200).json(posts)
})

app.post('/post', (req, res) => {
  const newPost = {...req.body, id: faker.datatype.uuid()}
  posts.push(newPost);
  return res.status(200).json(newPost)
})

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
