var exp = require('express');
var bp=require('body-parser');

var app = exp();
app.use(bp.json());


app.listen(9000,function(){
    console.log("server started getform");
});

app.get('/getform',function(req,res){
    res.sendFile(__dirname+"/form.html");
    console.log("in get");
})

app.post('/getDataTable',function(req,res){
    res.send("success");
});