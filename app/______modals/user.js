module.exports = function(sequelize, Sequelize){

	var User = sequelize.define('user', {

		id:{
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},

		firstname: {
			type: Sequelize.STRING,
			notEmpty: true
		},

		lastname: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		username:{
			type: Sequelize.TEXT
		},
		about:{
			type: Sequelize.TEXT
		},
		email:{
			type: Sequelize.STRING,
			validate: {
				isEmail: true
			}
		},

		password: {
			type: Sequelize.STRING,
			allowNull: false
		},

		last_login:{
			type: Sequelize.DATE
		},

		status: {
			type: Sequelize.ENUM('active', 'inactive'),
			defaultValue: 'active'
		}

	});

	return User;



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
		type: sequelize.STRING,

	}


};



INSERT INTO books (book_id, book_title, book_author, book_picture )
VALUES (3691, "Little Wars", "H. G. Wells", "https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Popular_Schoolgirl_-_book_cover_-_Project_Gutenberg_eText_18505.jpg");

INSERT INTO books (book_id, book_title, book_author, book_picture )
VALUES (1342, "Pride and Prejudice", "Jane Austen", "https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Popular_Schoolgirl_-_book_cover_-_Project_Gutenberg_eText_18505.jpg");

INSERT INTO books (book_id, book_title, book_author, book_picture )
VALUES (84, "Frankenstein; Or, The Modern Prometheus", "Mary Wollstonecraft Shelley", "https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Popular_Schoolgirl_-_book_cover_-_Project_Gutenberg_eText_18505.jpg");

INSERT INTO books (book_id, book_title, book_author, book_picture )
VALUES (219, "Heart of Darkness", "Joseph Conrad", "https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Popular_Schoolgirl_-_book_cover_-_Project_Gutenberg_eText_18505.jpg");

INSERT INTO books (book_id, book_title, book_author, book_picture )
VALUES (844, "The Importance of Being Earnest: A Trivial Comedy for Serious People", "Oscar Wilde", "https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Popular_Schoolgirl_-_book_cover_-_Project_Gutenberg_eText_18505.jpg");

INSERT INTO books (book_id, book_title, book_author, book_picture )
VALUES (11, "Alice's Adventures in Wonderland", "Lewis Carroll", "https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Popular_Schoolgirl_-_book_cover_-_Project_Gutenberg_eText_18505.jpg");

INSERT INTO books (book_id, book_title, book_author, book_picture )
VALUES (76, "Adventures of Huckleberry Finne", "Mark Twain", "https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Popular_Schoolgirl_-_book_cover_-_Project_Gutenberg_eText_18505.jpg");

INSERT INTO books (book_id, book_title, book_author, book_picture )
VALUES (1952, "The Yellow Wallpaper", "Charlotte Perkins Gilman", "https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Popular_Schoolgirl_-_book_cover_-_Project_Gutenberg_eText_18505.jpg");

INSERT INTO books (book_id, book_title, book_author, book_picture )
VALUES (2542, "A Doll's House : a play", "Henrik Ibsen", "https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Popular_Schoolgirl_-_book_cover_-_Project_Gutenberg_eText_18505.jpg");

INSERT INTO books (book_id, book_title, book_author, book_picture )
VALUES (98, "A Tale of Two Cities", "Charles Dickens", "https://upload.wikimedia.org/wikipedia/commons/b/b0/A_Popular_Schoolgirl_-_book_cover_-_Project_Gutenberg_eText_18505.jpg");




}
