const express = require('express');
const cors = require('cors');
const router = express.Router();
// контроллеры для маршрутов
const createPostController = require('./controllers/createPostController');
const getAllPostController = require('./controllers/getAllPostsController');
const getPostController = require('./controllers/getPostController');
const deletePostController = require('./controllers/deletePostController');
const getEditPostController = require('./controllers/getEditPostController');
const editPostController = require('./controllers/editPostController');
const loginCheckController = require('./controllers/loginCheckController');
const createUserController = require('./controllers/createUserController');
const getPostsController = require('./controllers/getPostsController');
const logoutController = require('./controllers/logoutController');
const renderDeletePage = require('./controllers/renderDeletePage');


const checkAuth = (req, res, next) => {
    console.log(req.session.auth);
    if (req.session.auth === 'ok') {
        next();
    } else {
        res.redirect('/login');
    }
};

const checkLogin = (req, res, next) => {
    if (req.session.auth === 'ok') {
        res.redirect('/posts');
    } else {
        next();
    }
};

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


// маршрут /post для создания, удаления, изменения постов
router
    .route('/post')
    .post(createPostController)
    .put(editPostController)
    .delete(deletePostController);

// для перехода на страницу удаления поста, если пользователь залогинен
router
    .get('/delete/:id',checkAuth, renderDeletePage);

// для получения списка всех постов
router
    .route('/allposts')
    .get(getAllPostController);

// отдает html файл со списком постов
router
    .route('/posts')
    .get(getPostsController);
    // .get((req, res) => {
    //     res.sendFile('client/posts/posts.html', {root: __dirname })
    // });


// отдает html файл со страницей добавления поста
router
    .route('/addpost')
    .get((req, res) => {
        res.sendFile('client/addpost/addpost.html', {root: __dirname })
    });

router
    .route('/logout')
    .get(logoutController);

// для проверки логина пароля
router
    .route('/logincheck')
    .post(loginCheckController);


// для добавления нового пользователя
router
    .route('/adduser')
    .get((req,res) => {
        res.sendFile('client/adduser/adduser.html', {root: __dirname })
    })
    .post(createUserController);

// отдает html файл со страницей login
router
    .get('/login', checkLogin, (req, res) => {
        res.sendFile('client/login/login.html', {root: __dirname })
    })
    // рендерит страницу определенного поста
    .get('/post/:id', getPostController)

    // рендерит страницу изменения определенного поста
    .get('/edit/:id', checkAuth, getEditPostController);


module.exports = router;
