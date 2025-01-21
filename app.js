const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const postsRouter = require('./routes/posts')
app.use ('/posts', postsRouter)

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})