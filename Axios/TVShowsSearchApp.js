const form = document.querySelector('#searchForm');
const div = document.querySelector('#pic');
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    showImages(res.data) ;
})

const showImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const newImg = document.createElement('IMG');
            const url = result.show.image.medium;
            newImg.src = url;
            div.append(newImg);
        }
    }
}