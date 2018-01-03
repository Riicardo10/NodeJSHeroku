var app = require( './app' )
var port = app.get( 'port' )
var server = app.listen( port, () => {
	console.log( 'Servidor en ejecucion en el puerto ' + port )
})

/*
	METODOS HTTP DE UNA API REST
		POST 		CREACION
		GET 		LECTURA
		PUT 		ACTUALIZACION
		DELETE 	ELIMINACION
*/
