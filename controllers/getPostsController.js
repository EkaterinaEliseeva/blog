const {Post} = require('../conn');

module.exports = async (req, res) => {

    const login = req.session.login ? req.session.login : null;

    // ищем все посты в бд
    const result = await Post.find();

    // отправляем список постов
    res.render('posts', {posts: result, login});

};