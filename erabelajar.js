var express = require('express');
var app = express();

app.get('/guru', function(request, response){
	var guru= ['Budi', 'Shinta', 'Hendra'];
	response.send(guru);
	});

app.get('/anggota', function(request, response){
	response.redirect('/guru');
});

app.listen(8080, function(){
	console.log('Server telah berjalan');
	});
