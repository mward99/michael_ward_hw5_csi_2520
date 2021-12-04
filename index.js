const express = require('express');

app = express();


app.get('/', (req,res)=>{
    res.send('welcome to the jungl');
})

app.listen(3000, ()=> console.log('Server running on port 300'));
const PORT = process.env.PORT || 3000;

