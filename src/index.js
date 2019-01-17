const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path'); 
//Configuracion Multer
const rutas = require('./routes/index');

// Settings
app.set('port', 4000);
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname + '/views' ));

//Middlewares
app.use( rutas );

app.listen( app.get('port'), () => {
	console.log('Server on port: ', app.get('port') );
});