const express = require('express');
const app = express();
const {infoCourses} = require('./data/courses');
const { math, programming } = require('./data/courses').infoCourses;
const programmingRouter = require('./routers/programming');

app.get('/',(req,res)=>{
  res.send(JSON.stringify(programming));
})

app.use('/api/courses/programming',programmingRouter);

PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log(`the server is listening in the port: ${PORT}`);
})