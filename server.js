const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'app')))
app.use('/api', express.static(path.join(__dirname, 'data')));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
