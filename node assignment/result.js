const axios = require('axios');
const url = 'http://jsonplaceholder.typicode.com/posts';
const fs = require('fs');
axios.get(url)
   .then(response => {
        console.log(response.data);
  })
  .catch (error => {
    console.log(error);
  })

fs.writeFile('posts.txt', url, function (err) {
  if (err) throw err;
  console.log('saved');
});