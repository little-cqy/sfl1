const express=require('express');

let app=express();
app.listen(8088);

app.use(express.static('public'));
