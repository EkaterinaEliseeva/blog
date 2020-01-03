const m	= require('mongoose');

//
m.Promise = global.Promise;

// подключение к бд
const conn = m.createConnection('mongodb+srv://user:user@cluster0-lwvqu.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });

// модель пользователя
const UserSchema = new m.Schema({
        "login": {
            "type": "string"
        },
        "password": {
            "type": "string"
        }
    }, {"collection": "users"}
);

// модель поста
const PostSchema = new m.Schema({
        "title": {
            "type": "string"
        },
        "categories": {
            "type": "string"
        },
        "content": {
            "type": "string"
        }
    }, {"collection": "posts"}
);


const User = conn.model( 'User', UserSchema );
const Post = conn.model( 'Post', PostSchema );

module.exports.User = User;
module.exports.Post = Post;