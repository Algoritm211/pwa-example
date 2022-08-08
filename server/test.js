const path = require('path');
const fs = require('fs');


console.log(fs.readdirSync(path.join(__dirname, 'photos')).map(data => path.join(__dirname,`${data}`)));
// console.log(path.join(__dirname, 'photos'));

const photos = fs.readdirSync(path.join(__dirname, 'photos'))
  .map(data => path.join(__dirname,`${data}`))
  .map(data => ({url: data}))
console.log(photos);
