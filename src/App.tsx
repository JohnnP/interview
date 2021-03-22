import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import getRepository from './services/github-repository';
import { debounce } from 'lodash';

import './App.scss';

const debouncedCall = debounce(getRepository, 500);


function App(): JSX.Element {
  const [querie, setQuerie] = useState('');
  const [data, setData] = useState<any>({});

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuerie(value);

    const response = await debouncedCall(value) || {data: []};
    setData(response.data);
    
  };

  return (
    <div className="App">
      <SearchBar value={querie} onChange={onChange} />
      <ResultList list={data.items} />
    </div>
  ); 
}

export default App;
