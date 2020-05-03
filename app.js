var express=require('express');
var bodyParser=require('body-parser');
var https=require('https');
var app=express();
app.use(express.static(__dirname+ "/public"))
var items=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
    response.render('index',{items:items});
});

app.post("/",function(request,response){
    items.push(request.body.item);
    console.log(items);
    response.redirect("/");
})

app.listen(3000,function(request,respond){
    console.log('Server started');
});