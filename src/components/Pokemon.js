import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

export default function Pokemon({queryKey}) {
  const queryInfo = useQuery(queryKey, async() => {
    await new Promise (resolve => setTimeout(resolve, 500))
    return axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(res =>  res.data.results)
    }, {
        cacheTime: 5000,
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
        <br/>
        {queryInfo.isFetching ? 'Updaing...' : null}
      </div>
  );
}