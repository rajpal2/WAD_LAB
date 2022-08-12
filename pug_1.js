var express = require('express'); 
var app = express(); 
//set view engine 
app.set('view engine', 'pug');
//set views path directory
app.set('views','./views');
app.get('/', function(req, res){
 res.render('first_view');
}); 
var server = app.listen(5000, "127.0.0.1", function () { 
 var address = server.address().address;
 var port = server.address().port;
 console.log('Node server is running on http://%s:%s', address, 
port); 
}); 