var api_key = 'key-a90e8aeabc6e193e9687ae5a0a748030';
var domain = 'sandboxf23d6e3dd42746799e368a7ba6c0e951.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
const express = require('express');
const Parse= require('body-parser');
const app = express();

var data = {
  from: 'Mayank <mayank4811.be22@chitkara.edu.in>',
  to: 'mayank4811.be22@chitkara.edu.in',
  subject: 'Hello USER HOW ARE U',
  text: 'Testing some Mailgun awesomeness!'
};
app.use(Parse.urlencoded({extended:true}))
app.use(express.static("Public"));
app.get("/",function(req,res){  
    res.sendFile(__dirname+"/index.html")
})

app.listen(5050, function(req, rev)
{
    console.log('SERVER IS CURRENTLY ACTIVE ON 5050');
})
app.post('/',function(req,res){
    const email= req.body.email;
    console.log(req.body);
    mailgun.messages().send(data, function (error, body) {
        if(error){
            console.log(error);
        }
      console.log(body);
})

});