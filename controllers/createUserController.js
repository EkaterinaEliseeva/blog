const {User} = require('../conn');

module.exports = async (req, res) => {
    // получаем логин, пароль из тела запроса
    const {login, password} = req.body;

    const newUser = new User({login, password});

    try {
        // сохраняем пользователя в бд и возвращаем успешный ответ
        res.status(201).json(await newUser.save());
    } catch (e) {
        await res.status(500).json('Internal Server Error');
    }
};