const {Post} = require('../conn');

module.exports = async (req, res) => {
    // получаем id из параметров запроса
    const {id} = req.params;
    // находим пост
    const result = await Post.find({_id: id});
    // если найден, рендерим страницу с отображением данных поста
    result[0] ? res.render('post', {result: result[0]}) : res.send('<p> no posts </p> <a href="http://localhost:4000/posts">All posts</a>');
};