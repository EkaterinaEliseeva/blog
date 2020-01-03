const {Post} = require('../conn');

module.exports = async (req, res) => {

    const login = req.session.login ? req.session.login : null;

    // получаем id из параметров запроса
    const {id} = req.params;
    // находим пост
    const result = await Post.find({_id: id});
    // если найден, рендерим страницу с отображением данных поста
    result[0] ? res.render('post', {result: result[0], login}) : res.send('<p> no posts </p> <a href="/posts">All posts</a>');
};