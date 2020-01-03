const {Post} = require('../conn');

module.exports = async (req, res) => {
    // ищем все посты в бд
    const result = await Post.find();
    // отправляем список постов
    result ? res.send(result) : res.send('no posts');

};