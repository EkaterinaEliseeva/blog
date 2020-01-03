const {User} = require('../conn');

module.exports = async	(req, res)	=> {
    const {login, password} = req.body;
    console.log(login, password);
    const user = await User.findOne({login});
    if (user) {
        if (user.password === password)	{
            req.session.auth = 'ok';
            req.session.login = login;
            res.json('ok');
        } else {
            res.json('Неверный	пароль!');
        }
    } else {
        res.json('Пользователь не существует!');
    }
};