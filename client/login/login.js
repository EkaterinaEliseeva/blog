(()=> {
    const btn = document.querySelector('.login-form__btn');
    const form = document.querySelector('.login-form');
    const status = document.querySelector('.login-form__status');

    if (!btn && !form && !status) {
        return;
    }

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const login = form.querySelector('#login').value;
        const password = form.querySelector('#password').value;
        const url = '/logincheck';

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
            .then((res)=> res.json())
            .then((res)=> {
                console.log(res);
                if (res === 'ok') {
                    window.location.href = '/posts'
                } else {
                    status.textContent = res;
                }
            })
            .catch((err)=>{status.textContent = err;});
    })

})();