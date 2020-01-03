const {Post} = require('../conn');

module.exports = async (req, res) => {
    // получаем пост из тела запроса
    const post = new Post(req.body);

    try {
        // сохраняем пост в бд и возвращаем успешный ответ
        await post.save();
        res.status(201).json('Пост успешно создан!');
    } catch (e) {
        await res.status(500).json('Internal Server Error');
    }

};