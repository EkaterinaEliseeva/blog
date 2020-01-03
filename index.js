const conn = require('./conn');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const router = require('./routes');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
        url: 'mongodb+srv://user:user@cluster0-lwvqu.mongodb.net/test?retryWrites=true&w=majority',
    })
}));

// путь по которому лежат шаблоны pug
app.set('views', './client/post');

// говорим приложению об использовании pug
app.set('view engine', 'pug');

// используем роутер
app.use(router);

// папка со стачическими файлами
app.use(express.static('.'));

// если 404 редирект на /posts
app.use(({ res: r }) => r.status(404).redirect('/posts'))
    .use((e, r, rs, n) => rs.status(500).end(`Ошибка: ${e}`));

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on http://localhost:${port}`);
});

