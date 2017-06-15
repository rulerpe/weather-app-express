const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,'../dist');
const port = process.env.PORT || 3000
var app = express();

app.use(express.static(publicPath));
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname+'../dist/index.html'))
})


app.listen(port, ()=>{
  console.log('Server is up on port ${port}')
});
