var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'portfolio';
	
	locals.filters = {
		item: req.params.item
	};
	locals.data = {
		posts: []
	};
	
	// Render the view
	view.render('portfolio');
};