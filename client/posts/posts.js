(()=> {
    const postsList = document.querySelector('.posts__list');
    const postTemplate = document.querySelector('#post');

    if (!postsList && !postTemplate) {
        return;
    }

    const fragment = document.createDocumentFragment();
    const url = '/allposts';

    fetch(url)
        .then(res=> res.json())
        .then((res) => {
            res
                .forEach(postData => {
                    const post = postTemplate.content.cloneNode(true);

                    post.querySelector('.posts__item').setAttribute('href','http://localhost:4000/post/' + postData._id);

                    post.querySelector('.posts__title').textContent = postData.title;
                    post.querySelector('.posts__categories').textContent = postData.categories;
                    post.querySelector('.posts__content').textContent = postData.content;

                    fragment.appendChild(post);
                });

            postsList.appendChild(fragment);

        })
        .catch((err)=>console.log(err));



})();