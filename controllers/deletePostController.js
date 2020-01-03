const {Post} = require('../conn');

module.exports = async (req, res) => {
    // получаем id поста из запроса
    const id = req.body;

    try {
        // удаляем пост
        const x = await Post.deleteOne(id);

        if (x.n === 0) {
            // если поста нет
            res.send('<p> no posts </p> <a href="/posts">All posts</a>')
        } else {
            // если пост удален, редиректим на список постов
            // это не работает, при успешном удалении срабатывает window.location.href на фронте
            res.redirect(303, '/posts');
        }

    } catch (e) {
        res.status(500).json('Internal Server Error');
    }
};