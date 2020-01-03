const {Post} = require('../conn');

module.exports = async (req, res) => {
    // получаем id поста из запроса
    const id = req.body;

    try {
        // удаляем пост
        const x = await Post.deleteOne(id);

        res.status(301).json('ok');

    } catch (e) {
        res.status(500).json('Internal Server Error');
    }
};