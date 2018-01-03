// ``
var express = require( 'express' )
//var favicon = require( 'serve-favicon' )
var body_parser = require( 'body-parser' ) 						// permite manejar como cadena/objeto los datos que se pasan de un formulario
var morgan = require('morgan')									// muestra en consola lo q va consumiendo la app
var routes  = require( './routes/index' )							// manejo de la logica 
//var favicon_url = `${__dirname}/public/img/img1.png`	
var public_dir = express.static( `${__dirname}/public` )		// url de la app
var view_dir = `${__dirname}/views`							// carpeta de vistas
var port = ( process.env.PORT || 3000 )							// puerto
var app = express()

app
	.set( 'views', view_dir )
	.set( 'view engine', 'jade' )
	.set( 'port', port )
	//.use( favicon( favicon_url ) )
	.use( body_parser.json() )
	.use( body_parser.urlencoded( {extended: false} ) )
	.use( morgan('dev') )
	.use( public_dir )
	.use( routes )
module.exports = app