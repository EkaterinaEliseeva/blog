(()=> {
    const delBtn = document.querySelector('.del');
    const changeBtn = document.querySelector('.change');
    const popup = document.querySelector('.popup');
    const status = document.querySelector('.post__status');

    if (!delBtn && !changeBtn) {
        return;
    }

    function closePopup(evt) {
        evt.preventDefault();

        if (evt.target === popup) {
            popup.classList.remove('show');
        }
    }

    function onDeleteBtnClick(evt) {
        evt.preventDefault();

        const url = '/post';

        const id = document.querySelector('#id').textContent;

        const data = {_id: id};


        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(() => window.location.href = '/posts')
            .catch(err=>{
                popup.classList.remove('show');
                status.textContent = err;
            });
    }

    delBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        popup.classList.add('show');

        popup.querySelector('.popup__btn').addEventListener('click', onDeleteBtnClick);
        popup.addEventListener('click', closePopup);

    })

    changeBtn.addEventListener('click', (evt) => {
        evt.preventDefault();

        const id = document.querySelector('#id').textContent;

        const url = 'http://localhost:4000/edit/' + id;

        window.location.href = url;
    })

})();