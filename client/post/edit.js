(() => {
    const form = document.querySelector('.editpost');
    const saveBtn = document.querySelector('.editpost__btn');
    const select = document.querySelector('select');
    const status = document.querySelector('.editpost__status');
    const options = select.querySelectorAll('option');
    const id = form.querySelector('#id').textContent;
    const title = form.querySelector('#title');
    const categories = form.querySelector('#categories');
    const content = form.querySelector('#content');

    if (!saveBtn && !select && !status) {
        return;
    }

    const oldCategories = select.getAttribute('data-old');

    options.forEach((it) => {
        if (it.value === oldCategories) {
            it.setAttribute('selected', 'selected');
        }
    });

    saveBtn.addEventListener('click', (evt) => {
        evt.preventDefault();

        const url = 'http://localhost:4000/post';


        const newData = {
            _id: id,
            title: title.value,
            categories: categories.value,
            content: content.value
        };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then(res => res.json())
            .then((res) => {
                status.textContent = res;
            })
            .catch((err) => {
                status.textContent = err
            });

    });


})();