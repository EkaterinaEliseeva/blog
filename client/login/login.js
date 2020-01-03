(()=> {
    const btn = document.querySelector('.login-form__btn');
    const form = document.querySelector('.login-form');
    const status = document.querySelector('.login-form__status');

    if (!btn && !form && !status) {
        return;
    };

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const login = form.querySelector('#login').value;
        const password = form.querySelector('#password').value;
        const url = 'http://localhost:3000/login';

        const data = {
            login,
            password
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(()=> {console.log('ok')})
            .catch((err)=>console.log(err));
    })

})();