(()=> {
    const btn = document.querySelector('.adduser__btn');
    const form = document.querySelector('.adduser');
    const status = document.querySelector('.adduser__status');

    if (!btn && !form && !status) {
        return;
    }

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const login = form.querySelector('#login').value;
        const password = form.querySelector('#password').value;
        const url = '/adduser';

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
            .then(res => res.json())
            .then((res) => {
                if (res._id) {
                    window.location.href = "/login"
                } else {
                    status.textContent = res
                }
            })
            .catch((err)=>{
                status.textContent = err;
            });
    })

})();