var cors = require('cors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var port =  process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors());


app.get('/',function(req,res,next){
	var host = req.headers.host;
	var language = req.headers['accept-language'].substr(0,req.headers['accept-language'].indexOf(';'));
	var software =req.headers['user-agent'].match("\\((.*?)\\)")[1];

	var ipaddress = req.headers['x-forwarded-for'] ||
	req.connection.remoteAddress ||
	req.socket.remoteAddress ||   				req.connection.socket.remoteAddress;

	res.json({
		ipaddress : ipaddress, 
		language : language,
		software : software
		});	
	
});


app.listen(port,function(){
console.log('app is working on port '+port);
})
