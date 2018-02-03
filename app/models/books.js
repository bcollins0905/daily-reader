module.exports = function(sequelize, Sequelize){

var Books = sequelize.define('books', {

	book_id:{
		primaryKey: true,
		type: Sequelize.INTEGER
	},

	book_title: {
		type: Sequelize.STRING,

	},

	book_author: {
		type: Sequelize.STRING,

	},

	book_picture: {
		type: Sequelize.STRING,

	}
});


return Books;

}
