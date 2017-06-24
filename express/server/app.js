const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const logger = require('morgan');

// LOGS ALL MY REQUEST #'s TO TERMINAL
app.use(logger('dev'))

app.use(bodyParser.json())



app.use('/spa', express.static(__dirname + "/../public/spa"));
app.use('/css', express.static(__dirname + "/../public/css"));


// GETS RID OF NEED FOR NODE_MODULES PATH
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))











// DAS ROUTES

// app.use('/api/projects', require('./routes/projects'))
// app.use('/api/projects', require('./routes/comments'))

// app.use('/api/home', require('./routes/home'))
// app.use('/api/tutorials', require('./routes/tutorials'))





// SERVING 'index.html'
app.use('*', function(req, res) {
  res.sendFile('index.html', {root: './public'})
})






// ERROR HANDLING

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})


if (process.env.NODE_ENV !== 'test') {
  const logger = require('morgan')
  app.use(logger('dev'))
}

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.log(err)
  res.status(err.status || 500)
  res.json(err)
})

module.exports = app;
