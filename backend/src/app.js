const express = require('express')
const cors=require('cors')
const app = express()

//SETTINGS
app.set('port', process.env.PORT || process.env.PORT_PROJECT)

//MIDDLEWARES
app.use(cors())
app.use(express.json())

//ROUTES
app.use('/',require('./routes/login'))
app.use('/api/cards',require('./routes/cards'))
app.use('/api/voted',require('./routes/voted'))
app.use('/api/result',require('./routes/results'))


module.exports = app