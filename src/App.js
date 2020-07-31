import React from 'react';
import {ReactQueryDevtools} from 'react-query-devtools';

//components
import Pokemon from './components/Pokemon';


function App(){
  return(
    <div>
      <Pokemon queryKey={'pokemon1'}/>
      <Pokemon queryKey={'pokemon1'} />
      <ReactQueryDevtools />
    </div>
  )
}

export default App;
