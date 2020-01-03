(()=> {
    const btn = document.querySelector('.adduser__btn');
    const form = document.querySelector('.adduser');
    const status = document.querySelector('.adduser__status');

    if (!btn && !form && !status) {
        return;
    };

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const login = form.querySelector('#login').value;
        const password = form.querySelector('#password').value;
        const url = 'http://localhost:4000/adduser';

        const postData = {
            login,
            password
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then(() => {
                window.location.href = "http://localhost:4000/login"
            })
            .catch((err)=>{
                status.textContent = err;
            });
    })

})();