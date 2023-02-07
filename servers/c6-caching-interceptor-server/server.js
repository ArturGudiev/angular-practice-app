const express = require('express')
const cors = require('cors')

const app = express();
const port = 3030;

const BOOKS = [
  {title: 'book0', author: 'author0'},
  {title: 'book1', author: 'author1'},
  {title: 'book2', author: 'author2'},
  {title: 'book3', author: 'author3'}
]

app.use(cors());
app.get('/books', async (req, res) => {
  console.log(req.url);
  res.send(BOOKS);
})

app.get('/book/:id', async (req, res) => {
  console.log(req.url);
  const id = +req.params.id;
  res.send(BOOKS[id]);
})

app.post('new-book', async (req, res) => {
  res.send({'message': 'ok'});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
