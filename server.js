var express = require('express'); 
var app = express(); 
app.get("/",(req, res)=>{

res.send('<form method="post" action="/formsubmit"><input name="email" type="email"> <input type="submit"></form>'); 
});        
         
app.post('/formsubmit', (req, res)=> {
  res.redirect('/success')
});

app.get('/success',(req, res)=>{
res.send('Got it'); 

}); 





app.listen(3000, ()=>{

console.log('Assignment for express');

}); 