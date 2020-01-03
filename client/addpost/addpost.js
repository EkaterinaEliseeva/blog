(()=> {
    const btn = document.querySelector('.addpost__btn');
    const form = document.querySelector('.addpost');
    const status = document.querySelector('.addpost__status');

    if (!btn && !form && !status) {
        return;
    };

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const title = form.querySelector('#title').value;
        const categories = form.querySelector('#categories').value;
        const content = form.querySelector('#content').value;

        const url = '/post';

        const postData = {
            title,
            categories,
            content
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then(res=>res.json())
            .then((res)=> {
                form.reset();
                status.textContent = res;
            })
            .catch((err)=>{
                status.textContent = err;
            });
    })

})();