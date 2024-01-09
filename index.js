const express = require('express')
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000 ;

const portfolio = require ('./data/portfolio.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/portfolio',(req,res)=>{
  res.send(portfolio)
})
app.get('/portfolio/:id',(req,res)=>{
  const id = req.params.id ;
  const selectedCategory = portfolio.find(c=> c.id == id);
  res.send(selectedCategory)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})