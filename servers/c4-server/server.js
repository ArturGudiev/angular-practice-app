const express = require('express')
const cors = require('cors')

const app = express();
const port = 3030;

app.use(cors());
app.get('/', (req, res) => {
  console.log('/ request', )
  res.send({x: 1, y: 2})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
