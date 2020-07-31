import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

function App() {
  const queryInfo = useQuery('pokemon', async() => {
    await new Promise (resolve => setTimeout(resolve, 500))
    // if(true){
    //   throw new Error('Test Error')
    // }    
    return axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(res =>  res.data.results)
    }
  );

  return queryInfo.isLoading ? (
    'Loading..'
    ) : queryInfo.isError ? (
      queryInfo.error.message
    ) : (
      <div>
        {queryInfo.data.map(item => {
          return <div key={item.name}>{item.name}</div>
        })}
      </div>
  );
}

export default App;
