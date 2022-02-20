const form = document.querySelector('#searchForm');
const button = document.querySelector('#btn');
button.addEventListener('click', async function (e) {
    e.preventDefault();
    const showName = form.elements.query.value;
    const config = { params: { q: showName } };
    const res = await axios.get(` https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = "";
})

const deleteImages = () => {
    const images = document.querySelectorAll('img');
    for (let image of images) {
        image.parentElement.removeChild(image);
    }
}

const makeImages = (shows) => {
    deleteImages();
    for (let res of shows) {
        if (res.show.image) {
            const img = document.createElement('IMG');
            img.src = res.show.image.medium;
            document.querySelector('.container').append(img);
        }
    }
}