import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Token from './Token';

// API HTTP \\
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=false

function App() {
  const [token, setTokens] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=false').then(res => {
      setTokens(res.data);
      console.log(res.data);
    }).catch(error => console.log("Error fetching coins"))
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  // set search to lowercase so token is always searched in lowercase and found the same way \\
  const filteredTokens = token.filter(toke => toke.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="App">
      <div className='token-app'>
        <div className='token-search'>
          <h1 className='token-text'>Search through Tokens</h1>
          <form>
            <input type='text' placeholder='Search' className='token-input' onChange={handleChange}/>
          </form>
        </div>
        {filteredTokens.map(token => {
          return (
            <Token key={token.id} 
            name={token.name} 
            image={token.image}
            symbol={token.symbol}
            marketCap={token.market_cap}
            price={token.current_price}
            priceChange={token.price_change_percentage_24h}
            volume={token.total_volume}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
