const form = document.querySelector('#searchForm');
const div = document.querySelector('#pic');
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    
    const url = res.data[0].show.image.medium;
    const newImg = document.createElement('IMG');
    newImg.src = url;
    div.append(newImg);

})