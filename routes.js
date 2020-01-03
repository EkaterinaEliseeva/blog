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
    .delete(deletePostController)
    .put(editPostController);

// для получения списка всех постов
router
    .route('/allposts')
    .get(getAllPostController);

// отдает html файл со списком постов
router
    .route('/posts')
    .get((req, res) => {
        res.sendFile('client/posts/posts.html', {root: __dirname })
    });

// отдает html файл со страницей добавления поста
router
    .route('/addpost')
    .get((req, res) => {
        res.sendFile('client/addpost/addpost.html', {root: __dirname })
    });

// отдает html файл со страницей login
router
    .get('/login', (req, res) => {
        res.sendFile('client/login/login.html', {root: __dirname })
    })
    // рендерит страницу определенного поста
    .get('/post/:id', getPostController)
    // рендерит страницу изменения определенного поста
    .get('/edit/:id', getEditPostController);



module.exports = router;
