import React from 'react';
import {ReactQueryDevtools} from 'react-query-devtools';

//components
import Pokemon from './components/Pokemon';


function App(){
  return(
    <div>
      <Pokemon />
      <ReactQueryDevtools />
    </div>
  )
}

export default App;
