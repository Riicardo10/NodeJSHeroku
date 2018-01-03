// AQUI SE ENCUENTRA TODA LA LOGICA DE NEGOCIO
var express = require( 'express' )
var router = express.Router()

function error404(req, res, next){
	let error = new Error()
	let locals = {
		titulo: 'Error 404',
		descripcion: 'Recurso no encontrado',
		error: error
	}
	error.status = 404
	res.render('error/error', locals)
	next()
}

router
	.get( '/', ( req, res, next ) => {				// RAIZ
		let locals = {
			titulo: 'INICIO',
		}
		res.render( 'index', locals )
	} )
	.get( '/editor', ( req, res, next ) => {		// EDITOR SOLO
		let locals = {
			titulo: 'EDITOR',
		}
		res.render( 'editor/editor', locals )
	} )
	.post( '/editor', ( req, res, next ) => {		// EDITOR DE LAS PRACTICAS
		let locals = {
			titulo: 'EDITOR',
			codigo_html : req.body.txt_codigo
		}
		res.render( 'editor/editor', locals )
	} )
	.post( '/', (req, res, next ) => {				// RENDERIZAR EN EL IFRAME
		var html = req.body.editor
		res.writeHead( 200, {'X-XSS-Protection':0} )
		res.write( html );
		res.end();
	} )
	.post( '/editorx', ( req, res, next ) => {		// EDITOR DE LAS PRACTICAS AJAX
		let locals = {
			titulo: 'EDITOR',
			codigo_html : req.body.txt_codigo,
			codigo_ajax : req.body.txt_codigo_ajax
		}
		res.render( 'editor/editorx', locals )
	} )
	.post( '/editorp', ( req, res, next ) => {		// EDITOR DE LAS PRACTICAS PHP
		let locals = {
			titulo: 'EDITOR',
			codigo_php : req.body.txt_codigo_php,
			codigo_js : req.body.txt_codigo_js
		}
		console.log(locals)
		res.render( 'editor/editorp', locals )
	} )
	.post( '/x', (req, res, next ) => {				// RENDERIZAR EN EL IFRAME DE AJAX
		var html = req.body.editor
		var ajax = req.body.ajax
		res.writeHead( 200, {'X-XSS-Protection':0} )
		res.write( ajax );
		res.end();
	} )
	.post( '/p', (req, res, next ) => {				// RENDERIZAR EN EL IFRAME DE AJAX
		var php = req.body.editor
		var js = req.body.js
		res.writeHead( 200, {'X-XSS-Protection':0} )
		res.write( js );
		res.end();
	} )
// HTML
	.get( '/html', ( req, res, next ) => {							// CONCEPTO HTML
		res.render( 'html/concepto' )
	} )
	.get( '/html/estructura', ( req, res, next ) => {				// ESTRUCTURA HTML
		res.render( 'html/estructura' )
	} )
	.get( '/html/etiquetas', ( req, res, next ) => {				// ETIQUETAS HTML
		res.render( 'html/etiquetas' )
	} )
	.get( '/html/formularios', ( req, res, next ) => {				// FORMULARIOS HTML
		res.render( 'html/formularios' )
	} )
	.get( '/html/formularios/metodos', ( req, res, next ) => {		// ETIQUETAS HTML
		res.render( 'html/formularios_envio' )
	} )
	.get( '/html/referencias', ( req, res, next ) => {				// REFERENCIAS HTML
		res.render( 'html/referencias' )
	} )
// CSS
	.get( '/css', ( req, res, next ) => {							// CONCEPTO CSS
		res.render( 'css/concepto' )
	} )
	.get( '/css/selectores', ( req, res, next ) => {				// SELECTORES CSS
		res.render( 'css/selectores' )
	} )
	.get( '/css/propiedades', ( req, res, next ) => {				// PROPIEDADES CSS
		res.render( 'css/propiedades' )
	} )
	.get( '/css/referencias', ( req, res, next ) => {				// REFERENCIAS CSS
		res.render( 'css/referencias' )
	} )
// BOOTSTRAP
	.get( '/bootstrap', ( req, res, next ) => {						// CONCEPTO BOOTSTRAP
		res.render( 'bootstrap/concepto' )
	} )
	.get( '/bootstrap/grid', ( req, res, next ) => {				// GRID BOOTSTRAP
		res.render( 'bootstrap/grid' )
	} )
	.get( '/bootstrap/tablas', ( req, res, next ) => {				// TABLAS BOOTSTRAP
		res.render( 'bootstrap/tablas' )
	} )
	.get( '/bootstrap/imagenes', ( req, res, next ) => {			// IMAGENES BOOTSTRAP
		res.render( 'bootstrap/imagenes' )
	} )
	.get( '/bootstrap/botones', ( req, res, next ) => {				// BOTONES BOOTSTRAP
		res.render( 'bootstrap/botones' )
	} )
	.get( '/bootstrap/paginacion', ( req, res, next ) => {			// PAGINACION BOOTSTRAP
		res.render( 'bootstrap/paginacion' )
	} )
	.get( '/bootstrap/formularios', ( req, res, next ) => {			// FORMULARIOS BOOTSTRAP
		res.render( 'bootstrap/formularios' )
	} )
	.get( '/bootstrap/referencias', ( req, res, next ) => {			// REFERENCIAS BOOTSTRAP
		res.render( 'bootstrap/referencias' )
	} )
// MATERIALIZE
	.get( '/materialize', ( req, res, next ) => {						// CONCEPTO MATERIALIZE
		res.render( 'materialize/concepto' )
	} )
	.get( '/materialize/grid', ( req, res, next ) => {					// GRID MATERIALIZE
		res.render( 'materialize/grid' )
	} )
	.get( '/materialize/tablas', ( req, res, next ) => {				// TABLAS MATERIALIZE
		res.render( 'materialize/tablas' )
	} )
	.get( '/materialize/imagenes', ( req, res, next ) => {				// IMAGENES MATERIALIZE
		res.render( 'materialize/imagenes' )
	} )
	.get( '/materialize/botones', ( req, res, next ) => {				// BOTONES MATERIALIZE
		res.render( 'materialize/botones' )
	} )
	.get( '/materialize/paginacion', ( req, res, next ) => {			// PAGINACION MATERIALIZE
		res.render( 'materialize/paginacion' )
	} )
	.get( '/materialize/formularios', ( req, res, next ) => {			// FORMULARIOS MATERIALIZE
		res.render( 'materialize/formularios' )
	} )
	.get( '/materialize/referencias', ( req, res, next ) => {			// REFERENCIAS MATERIALIZE
		res.render( 'materialize/referencias' )
	} )
// JAVASCRIPT
	.get( '/javascript', ( req, res, next ) => {						// CONCEPTO JAVASCRIPT
		res.render( 'javascript/concepto' )
	} )
	.get( '/javascript/sintaxis', ( req, res, next ) => {				// SINTAXIS JAVASCRIPT
		res.render( 'javascript/sintaxis' )
	} )
	.get( '/javascript/datos', ( req, res, next ) => {					// TIPOS DE DATOS JAVASCRIPT
		res.render( 'javascript/datos' )
	} )
	.get( '/javascript/flujo', ( req, res, next ) => {					// CONTROL DE FLUJO JAVASCRIPT
		res.render( 'javascript/flujo' )
	} )
	.get( '/javascript/arreglos', ( req, res, next ) => {				// ARREGLOS JAVASCRIPT
		res.render( 'javascript/arreglos' )
	} )
	.get( '/javascript/funciones', ( req, res, next ) => {				// FUNCIONES JAVASCRIPT
		res.render( 'javascript/funciones' )
	} )
	.get( '/javascript/referencias', ( req, res, next ) => {			// REFERENCIAS JAVASCRIPT
		res.render( 'javascript/referencias' )
	} )
// JQUERY
	.get( '/jquery', ( req, res, next ) => {						// CONCEPTO JQUERY
		res.render( 'jquery/concepto' )
	} )
	.get( '/jquery/sintaxis', ( req, res, next ) => {				// SINTAXIS JQUERY
		res.render( 'jquery/sintaxis' )
	} )
	.get( '/jquery/selectores', ( req, res, next ) => {				// SELECTORES JQUERY
		res.render( 'jquery/selectores' )
	} )
	.get( '/jquery/eventos', ( req, res, next ) => {				// EVENTOS JQUERY
		res.render( 'jquery/eventos' )
	} )
	.get( '/jquery/referencias', ( req, res, next ) => {			// REFERENCIAS JAVASCRIPT
		res.render( 'jquery/referencias' )
	} )
// ANGULAR
	.get( '/angular', ( req, res, next ) => {						// CONCEPTO ANGULAR
		res.render( 'angular/concepto' )
	} )
	.get( '/angular/expresiones', ( req, res, next ) => {			// EXPRESIONES ANGULAR
		res.render( 'angular/expresiones' )
	} )
	.get( '/angular/directivas', ( req, res, next ) => {			// DIRECTIVAS ANGULAR
		res.render( 'angular/directivas' )
	} )
	.get( '/angular/controladores', ( req, res, next ) => {			// CONTROLADORES ANGULAR
		res.render( 'angular/controladores' )
	} )
	.get( '/angular/referencias', ( req, res, next ) => {			// REFERENCIAS ANGULAR
		res.render( 'angular/referencias' )
	} )
// AJAX
	.get( '/ajax', ( req, res, next ) => {						// CONCEPTO ANGULAR
		res.render( 'ajax/concepto' )
	} )
	.get( '/ajax/request', ( req, res, next ) => {			// DIRECTIVAS ANGULAR
		res.render( 'ajax/request' )
	} )
	.get( '/ajax/response', ( req, res, next ) => {			// CONTROLADORES ANGULAR
		res.render( 'ajax/response' )
	} )
	.get( '/ajax/referencias', ( req, res, next ) => {			// REFERENCIAS ANGULAR
		res.render( 'ajax/referencias' )
	} )
// PHP
	.get( '/php', ( req, res, next ) => {						// CONCEPTO PHP
		res.render( 'php/concepto' )
	} )
	.get( '/php/sintaxis', ( req, res, next ) => {				// SINTAXIS PHP
		res.render( 'php/sintaxis' )
	} )
	.get( '/php/datos', ( req, res, next ) => {					// TIPOS DE DATOS PHP
		res.render( 'php/datos' )
	} )
	.get( '/php/flujo', ( req, res, next ) => {					// CONTROL DE FLUJO PHP
		res.render( 'php/flujo' )
	} )
	.get( '/php/arreglos', ( req, res, next ) => {				// ARREGLOS PHP
		res.render( 'php/arreglos' )
	} )
	.get( '/php/funciones', ( req, res, next ) => {				// FUNCIONES PHP
		res.render( 'php/funciones' )
	} )
	.get( '/php/referencias', ( req, res, next ) => {			// REFERENCIAS PHP
		res.render( 'php/referencias' )
	} )
// LARAVEL
	.get( '/laravel', ( req, res, next ) => {						// CONCEPTO LARAVEL
		res.render( 'laravel/concepto' )
	} )
	.get( '/laravel/routing', ( req, res, next ) => {				// ROUTING LARAVEL
		res.render( 'laravel/routing' )
	} )
	.get( '/laravel/controladores', ( req, res, next ) => {			// CONTROLADORES LARAVEL
		res.render( 'laravel/controladores' )
	} )
	.get( '/laravel/vistas', ( req, res, next ) => {				// VISTAS LARAVEL
		res.render( 'laravel/vistas' )
	} )
	.get( '/laravel/referencias', ( req, res, next ) => {			// REFERENCIAS LARAVEL
		res.render( 'laravel/referencias' )
	} )
	// PRACTICAS LARAVEL
	.get( '/laravel/1', ( req, res, next ) => {			// PRACTICA 1 LARAVEL
		res.render( 'laravel/practica_1' )
	} )
	.get( '/laravel/2', ( req, res, next ) => {			// PRACTICA 2 LARAVEL
		res.render( 'laravel/practica_2' )
	} )
	.get( '/laravel/3', ( req, res, next ) => {			// PRACTICA 3 LARAVEL
		res.render( 'laravel/practica_3' )
	} )
	.get( '/laravel/4', ( req, res, next ) => {			// PRACTICA 4 LARAVEL
		res.render( 'laravel/practica_4' )
	} )
	.get( '/laravel/5', ( req, res, next ) => {			// PRACTICA 5 LARAVEL
		res.render( 'laravel/practica_5' )
	} )
// NODEJS
	.get( '/nodejs', ( req, res, next ) => {						// CONCEPTO NODEJS
		res.render( 'nodejs/concepto' )
	} )
	.get( '/nodejs/modulos', ( req, res, next ) => {				// MODULOS NODEJS
		res.render( 'nodejs/modulos' )
	} )
	.get( '/nodejs/npm', ( req, res, next ) => {					// NPM NODEJS
		res.render( 'nodejs/npm' )
	} )
	.get( '/nodejs/mongo', ( req, res, next ) => {					// MONGO NODEJS
		res.render( 'nodejs/mongo' )
	} )
	.get( '/nodejs/referencias', ( req, res, next ) => {			// REFERENCIAS NODEJS
		res.render( 'nodejs/referencias' )
	} )
	// PRACTICAS NODEJS
	.get( '/nodejs/1', ( req, res, next ) => {			// PRACTICA 1 NODEJS
		res.render( 'nodejs/practica_1' )
	} )
	.get( '/nodejs/2', ( req, res, next ) => {			// PRACTICA 2 NODEJS
		res.render( 'nodejs/practica_2' )
	} )
	.get( '/nodejs/3', ( req, res, next ) => {			// PRACTICA 3 NODEJS
		res.render( 'nodejs/practica_3' )
	} )
	.get( '/nodejs/4', ( req, res, next ) => {			// PRACTICA 4 NODEJS
		res.render( 'nodejs/practica_4' )
	} )
	.get( '/nodejs/5', ( req, res, next ) => {			// PRACTICA 5 NODEJS
		res.render( 'nodejs/practica_5' )
	} )






// error
	.use( error404 )									// PAGINA DE ERROR
	
module.exports = router









