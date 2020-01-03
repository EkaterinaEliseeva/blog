(()=> {
    const changeBtn = document.querySelector('.change');
    const status = document.querySelector('.post__status');

    if (!changeBtn && !status) {
        return;
    }

    changeBtn.addEventListener('click', (evt) => {
        evt.preventDefault();

        const id = document.querySelector('#id').textContent;

        const url = '/edit/' + id;

        window.location.href = url;
    })

})();