const {Post} = require('../conn');

module.exports = async (req, res) => {
    // получаем id и новые данные из запроса
    const {_id, ...newPost} = req.body;

    try {
        // обновляем данные в бд
        const x = await Post.updateOne({_id}, newPost);
        // если поста нет
        if (x.nModified < 1) return await res.json('No such post');
        // иначе сообщаем об успешном изменении
        await res.status(200).json('Post changed successfully!');
    } catch (e) {
        await res.status(500).json('Internal Server Error');
    }


};