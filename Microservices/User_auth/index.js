const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')

connectToMongo();

const app = express()
const port = 5001

app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/auth') )
app.use('/api/access',require('./routes/access') )
app.use('/api/moretokens',require('./routes/moretokens') )
app.use('/api/mail',require('./routes/mail'))

app.use('/',(req,res)=>{
  return res.json({
    message:"Wecome to Docschat user auth microservice",
    version:"1.4"
  })
})

app.listen(port, () => {
  console.log('Docschat Microservice Running Successfully on port ***1')
})