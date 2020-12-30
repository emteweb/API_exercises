/* axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
    console.log(res.data.ticker.price)
})
.catch(err => {
    console.log(err)
}) */

/* const fetchBitcoinPrice = async () => {
    try{
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price)
    }catch(e) {
        console.log(e)
    }
} */
const jokes = document.querySelector('#jokes');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.append(res.data.joke);
    jokes.append(newLi);
});

const getJoke = async () => {
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res.data.joke);
    
}
