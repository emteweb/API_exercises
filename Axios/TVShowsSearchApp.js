const form = document.querySelector('#searchForm');
const div = document.querySelector('#pic');
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    
    // not to make http request string too long we add parameters defined separately, e.g.
    // const config = {params: {q: searchTerm, isFunny: true, etc}}

    const config = {params: {q: searchTerm}}
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    showImages(res.data);
    form.elements.query.value = '';
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