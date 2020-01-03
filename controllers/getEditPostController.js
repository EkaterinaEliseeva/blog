const {Post} = require('../conn');

module.exports = async (req, res) => {
    // получаем id из параметров запроса
    const {id} = req.params;
    // находим пост
    const result = await Post.find({_id: id});
    // если пост найден, рендерим страницу из шаблона pug для изменения поста
    result[0] ? res.render('edit', {result: result[0]}) : res.send('<p> no posts </p> <a href="/posts">All posts</a>');
};