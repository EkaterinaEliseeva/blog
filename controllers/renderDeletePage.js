module.exports = (req, res) => {
    // получаем id из параметров запроса
    const id = req.params;

    // рендерим страницу для удаления поста
    res.render('delete', {id});
};