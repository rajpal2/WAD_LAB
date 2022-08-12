var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', "./views")
app.get('/', function(req, res){
 res.render('dynamic', {
 name: "The Maharaja Sayajirao University of Baroda", 
 url:"http://www.msubaroda.ac.in"
 });
});
app.listen(3000);
