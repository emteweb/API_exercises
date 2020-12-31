/* fetch('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res=>{
    // here, the Promise is resolved as soos as we get the headers from the requested URL
    console.log('RESPONSE, WAITING TO PARSE ...', res)
    // to get the whole body of our request we need to parse the response, so the Promise will be resolved when we get all the data 
    return res.json()
})
.then(data=> {
console.log('DATA PARSED ...', data)
})
.catch(err=>{
    console.log('ERRRORR', err)
}) */

///////////////////////////////////////
//   the same with async function   //
///////////////////////////////////////


/* const fetchBitcoinPrice = async() => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price)
    } catch(err) {
console.log('SOMETHING WENT WRONG!!!', err)
    }

} */

// FETCH and AXIOS are Promise-based but ...
// with axios the Promise is resolved when all data are loaded (we do not need to parse the response)

/* axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res =>{
console.log(res.data.ticker.price)
})
 */

///////////////////////////////////////
//   the same with async function   //
///////////////////////////////////////

/* const getBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } 
    catch(err){
        console.log('SOMETHING WENT WRONG!!!', err)
    }
} */
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addJoke = async () => {
    const jokeText = await getDadJoke();
    //console.log(jokeText)
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return (res.data.joke);

    }
    catch (e) {
        return "No jokes available"
    }

}

button.addEventListener('click', addJoke)
