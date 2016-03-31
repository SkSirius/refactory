var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Comment model
 * =============
 */

var Comment = new keystone.List('Comment', { nocreate: true, noedit: true });

Comment.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now }
});

Comment.relationship({ ref: 'Post', path: 'comments'});

Comment.defaultSort = '-createdAt';
Comment.defaultColumns = 'name, email, message, createdAt';

Comment.register();