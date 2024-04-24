const express = require('express')
const userRoutes = require("./src/user/routes")
const app = express()
const port = 3000

// Middleware
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/api/user', userRoutes)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})