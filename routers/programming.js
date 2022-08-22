const express = require('express');
const { programming } = require('../data/courses').infoCourses;
const programmingRouter = express.Router();

programmingRouter.get('/',(req,res)=>{
  res.send(JSON.stringify(programming))
})

programmingRouter.get('/:lenguaje/:level',(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const level = req.params.level;
  const result = programming.filter(res => res.lenguaje === lenguaje && res.level === level);
  res.send(JSON.stringify(result));
});

programmingRouter.get('/:lenguaje',(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const result = programming.filter(res => res.lenguaje === lenguaje);
  res.send(JSON.stringify(result));
});



module.exports = programmingRouter;