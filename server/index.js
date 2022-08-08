const express = require('express') ;
const {posts, photos} = require("./data");
const cors = require('cors')
const { faker } = require('@faker-js/faker');
const fileUpload = require('express-fileupload')
const fs = require('fs')
const path = require('path')


const PORT = process.env.PORT || 5000

const app = express();
app.use(cors())
app.use(fileUpload({}));
app.use(express.json());

app.get('/posts', (req, res) => {
  return res.status(200).json(posts)
})

app.post('/post', (req, res) => {
  const newPost = {...req.body, id: faker.datatype.uuid()}
  posts.push(newPost);
  return res.status(200).json(newPost)
})

app.get('/photos', (req, res) => {
  return res.status(200).json(photos)
})

app.post('/photos', (req, res) => {
  const date = Date.now();
  const fileName = `${date}-${req.files.file.name}`
  photos.push({url: fileName})
  fs.writeFileSync(
    path.join(__dirname, 'photos', `${date}-${req.files.file.name}`),
    req.files.file.data
    )

  return res.status(200).json(photos)
})

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
