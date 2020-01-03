(()=> {
    const block = document.querySelector('.delete');
    const status = document.querySelector('.delete__status');
    const id = document.querySelector('#id').getAttribute('data-id');
    const delBtn = block.querySelector('.delete__btn');

    if (!block && !status && !id && !delBtn) {
        return;
    }

    function onDeleteBtnClick(evt) {
        evt.preventDefault();

        const url = '/post';

        const data = {_id: id};


        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(() => window.location.href = '/posts')
            .catch((err)=>{
                status.textContent = err;
        });
    }

    delBtn.addEventListener('click', onDeleteBtnClick);

})();