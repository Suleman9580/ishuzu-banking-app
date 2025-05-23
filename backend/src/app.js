const express = require('express')
const app = express()
const pageNotFoundErrHandling = require('./middleware/pageNotFoundErrHandling')
const ApiErrors = require('./utils/ApiError')
const cors = require("cors")
const ValidationMiddleware = require('./middleware/ValidationMiddleware')
const morgan = require('morgan')

app.use(express.json({}))
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))


app.use("/api/v1",require("./router"))




app.get('/', (req, res) => {
  res.send({msg: 'Hello World!'})
})

app.use("", (req, res, next) => {
  next(new ApiErrors(404, 'Not found'))
  
})

app.use(pageNotFoundErrHandling)

module.exports = app