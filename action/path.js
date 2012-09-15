var todo = require('../controllers/todo');
var htmlaction = require('../controllers/htmlaction');
exports.init=function(app){
	/**
	 * Routing
	 */
	app.get('/', todo.index);
	app.post('/todo/new', todo.new);
	app.get('/todo/:id', todo.view);
	app.get('/todo/:id/edit', todo.edit);
	app.post('/todo/:id/edit', todo.save);
	app.get('/todo/:id/delete', todo.delete);
	app.get('/todo/:id/finish', todo.finish);
	
	app.get("/monitor.html",htmlaction.monitor);
}